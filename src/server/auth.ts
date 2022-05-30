import jwt from 'jsonwebtoken';
import { JWTClaims } from '@nhost/core';

const jwtSecret = JSON.parse(process.env.NHOST_JWT_SECRET!);

export interface JwtToken extends JWTClaims {
    id: string;
}

export const decodeToken = (token: string) => {
    console.log(jwtSecret);
    console.log(token);
    try {
        const decoded = jwt.verify(token, jwtSecret.key, {
            algorithms: [jwtSecret.type],
        }) as JwtToken;

        // Add the user id on the top-level for ease of use
        return {
            ...decoded,
            id: decoded['https://hasura.io/jwt/claims']['x-hasura-user-id'],
        } as JwtToken;
    } catch (e) {
        return null;
    }
};
