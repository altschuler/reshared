import { NextApiRequest, NextApiResponse } from 'next';
import Joi from 'joi';
import { decodeToken, JwtToken } from './auth';
import { hasuraClient, makeHasuraUserClient } from './hasuraClient';
import { ApolloClient, DocumentNode, NormalizedCacheObject } from '@apollo/client';

export const errorReply = (res: NextApiResponse, status: number, message: string) => {
    res.status(status);
    res.json({ message });
};

export interface EventHandlerContext {
    req: NextApiRequest;
    res: NextApiResponse;
    userId: string;
    error: (msg: string, code?: number) => void;
    success: (output: unknown) => void;
    adminClient: ApolloClient<NormalizedCacheObject>;
}

export interface HandlerContext<TOutput> {
    req: NextApiRequest;
    res: NextApiResponse;
    token: JwtToken | null;
    error: (msg: string, code?: number) => void;
    success: (output: TOutput) => void;
    adminClient: ApolloClient<NormalizedCacheObject>;
}

export interface AuthorizedHandlerContext<TOutput> {
    req: NextApiRequest;
    res: NextApiResponse;
    token: JwtToken;
    userClient: ApolloClient<NormalizedCacheObject>;
    adminClient: ApolloClient<NormalizedCacheObject>;
    error: (msg: string, code?: number) => void;
    success: (output: TOutput) => void;
}

export const makeHandler = <TInput, TOutput>(
    schema: Joi.ObjectSchema<TInput>,
    handler: (args: TInput, ctx: HandlerContext<TOutput>) => Promise<void>,
) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const rawArgs: TInput = req.body.input;

        const { value: args, error: inputError } = schema.validate(rawArgs);

        if (inputError) {
            errorReply(res, 400, inputError.message);
            return;
        }

        // Remove 'Bearer ' from auth header
        const token =
            (req.headers.authorization && decodeToken(req.headers.authorization.slice(7))) || null;

        try {
            await handler(args, {
                req,
                res,
                token,
                adminClient: hasuraClient,
                error: (msg: string, status = 400) => errorReply(res, status, msg),
                success: (output: TOutput) => res.json(output),
            });
        } catch {
            errorReply(res, 400, 'An error occured while processing the request.');
        }
    };
};

export const makeAuthorizedHandler = <TInput, TOutput>(
    schema: Joi.ObjectSchema<TInput>,
    handler: (args: TInput, ctx: AuthorizedHandlerContext<TOutput>) => Promise<void>,
) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const rawArgs: TInput = req.body.input;
        const { value: args, error: inputError } = schema.validate(rawArgs);

        if (inputError) {
            errorReply(res, 400, inputError.message);
            return;
        }

        if (!req.headers.authorization) {
            errorReply(res, 400, 'You must be logged in to perform this action');
            return;
        }

        // Remove 'Bearer ' from auth header

        const token = decodeToken(req.headers.authorization.slice(7));

        if (!token) {
            return errorReply(res, 401, 'Session expired');
        }

        try {
            await handler(args, {
                req,
                res,
                token,
                adminClient: hasuraClient,
                userClient: makeHasuraUserClient(req.headers.authorization),
                error: (msg: string, status = 400) => errorReply(res, status, msg),
                success: (output: TOutput) => res.json(output),
            });
        } catch (err) {
            console.log(err);
            errorReply(res, 400, 'An error occured while processing the request.');
        }
    };
};

export interface HasuraEventPayload<T> {
    event: {
        session_variables: { [key: string]: string };
        op: 'INSERT' | 'UPDATE' | 'DELETE' | 'MANUAL';
        data: { old: T; new: null } | { old: null; new: T } | { old: T; new: T };
    };
    created_at: string;
    id: string;
    trigger: {
        name: string;
    };
    table: {
        schema: string;
        name: string;
    };
}

export const makeEventHandler =
    <T>(
        handler: (args: HasuraEventPayload<T>, ctx: EventHandlerContext) => Promise<void>,
        allowUnauthorized?: boolean,
    ) =>
    async (req: NextApiRequest, res: NextApiResponse) => {
        // Verify secret
        const secret = req.headers['x-webhook-secret'];
        if (!secret || secret !== process.env.NHOST_WEBHOOK_SECRET) {
            return errorReply(res, 401, 'Wrong or missing secret');
        }

        const payload = req.body as HasuraEventPayload<T>;

        const userId = payload.event.session_variables['x-hasura-user-id'] as string;

        if (!allowUnauthorized && (payload.event.op === 'MANUAL' || !userId)) {
            return res.json({
                success: true,
                message: 'ok: skipping manual trigger or missing user',
            });
        }

        try {
            await handler(req.body, {
                req,
                res,
                userId,
                adminClient: hasuraClient,
                error: (msg: string, status = 400) => errorReply(res, status, msg),
                success: (output: unknown) => res.json(output),
            });
        } catch (err) {
            console.log(err);
            errorReply(res, 400, 'Error: ' + err.message);
        }
    };

// Fixed duplicated fragments in generated queries
// See: https://github.com/dotansimha/graphql-code-generator/issues/8103
export const fixQuery = (query: DocumentNode) => {
    const deduped = query.definitions.reduce(
        (acc, def) => {
            if (def.kind !== 'FragmentDefinition') {
                return { added: acc.added, defs: [...acc.defs, def] };
            }

            if (acc.added.includes(def.name.value)) {
                return acc;
            }

            return { added: [...acc.added, def.name.value], defs: [...acc.defs, def] };
        },
        { added: [] as string[], defs: [] },
    );

    return { ...query, definitions: deduped.defs };
};
