import { NextApiRequest, NextApiResponse } from 'next';
import { FindUserDocument, RegisterUserDocument } from '../../../generated/server-queries';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import bcrypt from 'bcryptjs';
import Joi from 'joi';
import { isEmpty } from 'lodash';

const inputSchema = Joi.object({
    display_name: Joi.string().min(3),
    email: Joi.string().email().rule({ message: 'The given email is not valid.' }).optional(),
    password: Joi.string().min(6).rule({ message: 'Password must be at least 6 characters long' }),
});

const client = new ApolloClient({
    link: new HttpLink({
        fetch,
        uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
        headers: {
            'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
        },
    }),
    cache: new InMemoryCache(),
});

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

const error = (res: NextApiResponse, status: number, message: string) => {
    res.status(status);
    res.json({ message });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { input }: MutationRegisterCredentialsArgs = req.body.input;

    const { value, error: inputError } = inputSchema.validate(input);

    if (inputError) {
        error(res, 400, inputError.message);
        return;
    }

    const existing = await client.query({
        query: FindUserDocument,
        variables: { email: input.email },
    });

    if (!isEmpty(existing.data.users)) {
        error(res, 400, 'Email is already registered');
        return;
    }

    const password_hash = await makePasswordHash(input.password);

    const query = await client.mutate({
        mutation: RegisterUserDocument,
        variables: { input: { email: input.email, name: input.name, password_hash } },
    });

    const responseData = {
        user_id: query.data?.insert_users_one?.id,
    } as RegistrationResult;

    res.json(responseData);
};

export default handler;

// Hasura types
interface CredentialsInput {
    name: string;
    email: string;
    password: string;
}

interface MutationRegisterCredentialsArgs {
    input: CredentialsInput;
}

interface RegistrationResult {
    user_id: string;
}
