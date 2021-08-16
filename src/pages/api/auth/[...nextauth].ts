import NextAuth, { NextAuthOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import bcrypt from 'bcryptjs';
import { ServerUserCredentialsDocument } from '../../../generated/server-queries';
import { hasuraClient, decodeToken, encodeToken } from '../../../server';
import { getUnixTime, addHours } from 'date-fns';

interface Token {
    id: string;
    name: string;
    email: string;
    picture: string;
}

const options = {
    database: process.env.POSTGRES_URL,
    debug: true,
    jwt: {
        encode: async (options) => {
            if (!options?.token) {
                return null;
            }

            const t = (options.token as unknown) as Token;

            return encodeToken({
                id: t.id,
                name: t.name,
                email: t.email,
                picture: t.picture,
                'https://hasura.io/jwt/claims': {
                    'x-hasura-allowed-roles': ['user'],
                    'x-hasura-default-role': 'user',
                    'x-hasura-role': 'user',
                    'x-hasura-user-id': t.id,
                },
                iat: Date.now() / 1000,
                exp: getUnixTime(addHours(Date.now(), 1)),
                sub: t.id,
            });
        },
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        decode: async (options) => decodeToken(options!.token!) as unknown,
    },
    session: { jwt: true },
    pages: {
        signIn: '/login',
        error: '/login',
    },

    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        Providers.Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        }),
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        Providers.Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const userQuery = await hasuraClient.query({
                    query: ServerUserCredentialsDocument,
                    variables: { email: credentials.email },
                });

                const user = userQuery.data.users[0];

                if (!user?.password_hash) {
                    return Promise.resolve(null);
                }

                return bcrypt
                    .compare(credentials.password, user.password_hash)
                    .then((match) => (match ? user : null));
            },
        }),
    ],

    callbacks: {
        // TODO: type?
        session: async (session: any, user: any) => {
            session.id = user.id;
            session.token = encodeToken(user);

            return Promise.resolve(session);
        },

        jwt: async (token, user: any, account, profile, isNewUser) => {
            const isSignIn = !!user;

            if (isNewUser) {
                //hasuraClient.mutate({mutation: })
            }

            // Add auth_time to token on signin in
            if (isSignIn) {
                token.id = user.id;
            }

            return Promise.resolve(token);
        },
    },
} as NextAuthOptions;

export default (req, res) => NextAuth(req, res, options);
