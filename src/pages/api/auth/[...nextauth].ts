import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import bcrypt from 'bcryptjs';
import { UserCredentialsDocument } from '../../../generated/server-queries';
import { hasuraClient, decodeToken, encodeToken } from '../../../server';
import { getUnixTime, addHours } from 'date-fns';

const options = {
    database: process.env.POSTGRES_URL,
    jwt: {
        encode: async (options) =>
            encodeToken({
                id: options.token.id,
                name: options.token.name,
                email: options.token.email,
                picture: options.token.picture,
                'https://hasura.io/jwt/claims': {
                    'x-hasura-allowed-roles': ['user'],
                    'x-hasura-default-role': 'user',
                    'x-hasura-role': 'user',
                    'x-hasura-user-id': options.token.id,
                },
                iat: Date.now() / 1000,
                exp: getUnixTime(addHours(Date.now(), 1)),
                sub: options.token.id,
            }),
        decode: async (options) => (decodeToken(options.token) as unknown) as string,
    },
    session: { jwt: true },
    pages: {
        signIn: '/auth/signin',
        error: '/login',
    },

    providers: [
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
                    query: UserCredentialsDocument,
                    variables: { email: credentials.email },
                });

                const user = userQuery.data.users[0];

                if (!user?.password_hash) {
                    return Promise.resolve(null);
                }

                const match = bcrypt.compareSync(credentials.password, user.password_hash);

                return Promise.resolve(match ? user : null);
            },
        }),
    ],

    callbacks: {
        session: async (session, user) => {
            session.id = user.id;
            session.token = encodeToken(user);

            return Promise.resolve(session);
        },

        jwt: async (token, user, account, profile, isNewUser) => {
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
};

export default (req, res) => NextAuth(req, res, options);
