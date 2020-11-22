import { FindUserDocument, InsertUserDocument } from '../../../generated/server-queries';
import bcrypt from 'bcryptjs';
import Joi from 'joi';
import { isEmpty } from 'lodash';
import { RegisterUserMutationVariables, RegistrationResult } from '../../../generated/graphql';
import { hasuraClient, makeHandler } from '../../../server';

const makePasswordHash = (password: string) =>
    new Promise<string>((resolve, reject) => {
        bcrypt.genSalt(10, (saltErr, salt) => {
            saltErr
                ? reject(saltErr)
                : bcrypt.hash(password, salt, (hashErr, hash) =>
                      hashErr ? reject(hashErr) : resolve(hash),
                  );
        });
    });

export default makeHandler<RegisterUserMutationVariables, RegistrationResult>(
    Joi.object<RegisterUserMutationVariables>({
        input: Joi.object({
            name: Joi.string().min(3),
            email: Joi.string().email().rule({ message: 'The given email is not valid.' }),
            password: Joi.string()
                .min(6)
                .rule({ message: 'Password must be at least 6 characters long' }),
        }),
    }),
    async (args, ctx) => {
        const existing = await hasuraClient.query({
            query: FindUserDocument,
            variables: { email: args.input.email },
        });

        if (!isEmpty(existing.data.users)) {
            return ctx.error('Email is already registered');
        }

        const password_hash = await makePasswordHash(args.input.password);

        const query = await hasuraClient.mutate({
            mutation: InsertUserDocument,
            variables: { input: { email: args.input.email, name: args.input.name, password_hash } },
        });

        ctx.success({ user_id: query.data?.insert_users_one?.id });
    },
);
