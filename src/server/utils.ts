import { NextApiRequest, NextApiResponse } from 'next';
import Joi from 'joi';
import { decodeToken, JwtToken } from './auth';
import { makeHasuraUserClient } from './hasuraClient';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export const errorReply = (res: NextApiResponse, status: number, message: string) => {
    res.status(status);
    res.json({ message });
};

export interface HandlerContext<TOutput> {
    req: NextApiRequest;
    res: NextApiResponse;
    token: JwtToken | null;
    error: (msg: string, code?: number) => void;
    success: (output: TOutput) => void;
}

export interface AuthorizedHandlerContext<TOutput> {
    req: NextApiRequest;
    res: NextApiResponse;
    token: JwtToken;
    userClient: ApolloClient<NormalizedCacheObject>;
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

        try {
            await handler(args, {
                req,
                res,
                token,
                userClient: makeHasuraUserClient(req.headers.authorization),
                error: (msg: string, status = 400) => errorReply(res, status, msg),
                success: (output: TOutput) => res.json(output),
            });
        } catch {
            errorReply(res, 400, 'An error occured while processing the request.');
        }
    };
};
