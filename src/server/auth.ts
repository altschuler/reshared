import jwt from 'jsonwebtoken';

const jwtSecret = JSON.parse(process.env.AUTH_PRIVATE_SECRET!);

type HasuraRole = 'admin' | 'user' | 'public';

export interface JwtToken {
    id: string;
    name: string;
    email: string;
    picture: string;
    'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': HasuraRole[];
        'x-hasura-default-role': HasuraRole;
        'x-hasura-role': HasuraRole;
        'x-hasura-user-id': string;
    };
    iat: number;
    exp: number;
    sub: string;
}

export const decodeToken = (token: string) =>
    jwt.verify(token, jwtSecret.key, { algorithms: jwtSecret.type }) as JwtToken;

export const encodeToken = (contents: JwtToken) => {
    return jwt.sign(contents, jwtSecret.key, { algorithm: jwtSecret.type });
};
