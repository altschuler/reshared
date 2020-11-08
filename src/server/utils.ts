import { NextApiRequest, NextApiResponse } from 'next';
import Joi from 'joi';
import { decodeToken, JwtToken } from './auth';

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

        return handler(args, {
            req,
            res,
            token,
            error: (msg: string, status = 400) => errorReply(res, status, msg),
            success: (output: TOutput) => res.json(output),
        });
    };
};
