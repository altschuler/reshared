import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import bcrypt from 'bcryptjs';
import { UserCredentialsDocument } from '../../../generated/server-queries';
import { apollo } from '../../../utils/client';
import jwt from 'jsonwebtoken';

const jwtSecret = JSON.parse(process.env.AUTH_PRIVATE_SECRET!);

const options = {
    database: process.env.POSTGRES_URL,
    secret: process.env.NEXT_AUTH_SECRET,
    jwt: {
        encode: async ({ token, secret }) => {
            const tokenContents = {
                id: token.id,
                name: token.name,
                email: token.email,
                picture: token.picture,
                'https://hasura.io/jwt/claims': {
                    'x-hasura-allowed-roles': ['admin', 'user'],
                    'x-hasura-default-role': 'user',
                    'x-hasura-role': 'user',
                    'x-hasura-user-id': token.id,
                },
                iat: Date.now() / 1000,
                exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
                sub: token.id,
            };

            return jwt.sign(tokenContents, jwtSecret.key, { algorithm: jwtSecret.type });
        },
        decode: async ({ token, secret }: { token: string; secret: string }) =>
            jwt.verify(token, jwtSecret.key, { algorithms: jwtSecret.type }) as string,
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
                const userQuery = await apollo.query({
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
            const encodedToken = jwt.sign(user, jwtSecret.key, {
                algorithm: jwtSecret.type,
            });

            session.id = user.id;
            session.token = encodedToken;

            return Promise.resolve(session);
        },

        jwt: async (token, user, account, profile, isNewUser) => {
            const isSignIn = !!user;

            // Add auth_time to token on signin in
            if (isSignIn) {
                token.id = user.id;
            }

            return Promise.resolve(token);
        },
    },
};

export default (req, res) => NextAuth(req, res, options);
