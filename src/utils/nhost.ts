import { GetServerSidePropsContext } from 'next';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';

import {
    NhostClient,
    NhostSession,
    CreateServerSideClientParams,
    VanillaNhostClient,
    NHOST_REFRESH_TOKEN_KEY,
    AuthMachine,
} from '@nhost/nextjs';

import { waitFor } from 'xstate/lib/waitFor';
import { StateFrom } from 'xstate';

export const getNhostSession = async (
    context: GetServerSidePropsContext,
): Promise<{ nhost: NhostClient; nhostAdmin: NhostClient; session: NhostSession | null }> => {
    const connection = {
        subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
        region: process.env.NEXT_PUBLIC_NHOST_REGION,
    };

    const session = await getNhostSession3(connection, context);
    const nhost = await createServerSideClient2(connection, context);
    const nhostAdmin = await createServerSideClient2(connection, context);
    nhostAdmin.adminSecret = process.env.NHOST_ADMIN_SECRET!;

    return { nhost, nhostAdmin, session };
};

export const getNhostSession3 = async (
    params: CreateServerSideClientParams,
    context: GetServerSidePropsContext,
): Promise<NhostSession | null> => {
    const nhost = await createServerSideClient2(params, context);
    const { accessToken, refreshToken, user } =
        nhost.auth.client.interpreter!.getSnapshot().context;
    return nhost.auth.isAuthenticated()
        ? {
              accessToken: accessToken.value!,
              accessTokenExpiresIn: (accessToken.expiresAt!.getTime() - Date.now()) / 1_000,
              refreshToken: refreshToken.value!,
              user: user!,
          }
        : null;
};

export const createServerSideClient2 = async (
    params: CreateServerSideClientParams,
    context: GetServerSidePropsContext,
): Promise<NhostClient> => {
    const nhost = new VanillaNhostClient({
        ...params,
        clientStorageType: 'custom',
        clientStorage: {
            getItem: (key) => {
                // TODO does not perfectly work in the same way as the 'regular' client:
                // in the authentication machine, if the refresh token is null but an error is found in the url, then the authentication stops and fails.
                // * When the requested key is `NHOST_REFRESH_TOKEN_KEY`, we have to look for the given 'refreshToken' value
                // * in the url as this is the key sent by hasura-auth
                const urlKey = key === NHOST_REFRESH_TOKEN_KEY ? 'refreshToken' : key;
                const urlValue = context.query[urlKey];
                const cookieValue = getCookie(key, { req: context.req, res: context.res }); // Cookies.get(key) ?? null;
                const nextCtxValue = context.req.cookies[key];

                return typeof urlValue === 'string' ? urlValue : cookieValue ?? nextCtxValue;
            },
            setItem: (key, value) => {
                // TODO: Set expires based on the actual refresh token expire time
                // For now, we're using 30 days so the cookie is not removed when the browser is closed because if `expiers` is omitted, the cookie becomes a session cookie.
                const expires = new Date();
                expires.setDate(expires.getDate() + 30);
                setCookie(key, value, { req: context.req, res: context.res, expires });
                // Cookies.set(key, value, { httpOnly: false, sameSite: 'strict', expires: 30 });
            },
            removeItem: (key) => {
                deleteCookie(key, { req: context.req, res: context.res });
                // Cookies.remove(key);
            },
        },
        start: false,
        autoRefreshToken: false,
        autoSignIn: true,
    });

    const strSession = context.req.cookies['nhostSession'];
    const refreshToken = context.req.cookies[NHOST_REFRESH_TOKEN_KEY];
    const initialSession: NhostSession = strSession &&
        refreshToken && { ...JSON.parse(strSession), refreshToken };

    nhost.auth.client.start({ initialSession });
    await waitFor(
        nhost.auth.client.interpreter!,
        (state: StateFrom<AuthMachine>) => !state.hasTag('loading'),
    );
    return nhost;
};
