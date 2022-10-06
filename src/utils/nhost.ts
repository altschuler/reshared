import Cookies from 'js-cookie';
import { GetServerSidePropsContext } from 'next';
import { StateFrom } from 'xstate';
import { waitFor } from 'xstate/lib/waitFor';

import { AuthMachine, NHOST_REFRESH_TOKEN_KEY } from '@nhost/core';
import { NhostClient } from '@nhost/nhost-js';
import type { NhostSession } from '@nhost/nextjs';

export const createServerSideClient = async (
    backendUrl: string,
    context: GetServerSidePropsContext,
    admin?: boolean,
) => {
    const nhost = new NhostClient({
        backendUrl,
        adminSecret: admin ? process.env.NHOST_ADMIN_SECRET : undefined,
        clientStorageType: 'custom',
        clientStorage: {
            getItem: (key) => {
                const urlKey = key === NHOST_REFRESH_TOKEN_KEY ? 'refreshToken' : key;
                const urlValue = context.query[urlKey];
                const ctxValue = context.req.cookies[key];
                const cookieValue = Cookies.get(key) ?? null;
                return typeof urlValue === 'string' ? urlValue : cookieValue ?? ctxValue;
            },
            setItem: (key, value) => {
                Cookies.set(key, value, { httpOnly: false, sameSite: 'strict', expires: 30 });
            },
            removeItem: (key) => {
                Cookies.remove(key);
            },
        },
        start: true,
        autoRefreshToken: false,
        autoSignIn: true,
    });

    await waitFor(
        nhost.auth.client.interpreter!,
        (state: StateFrom<AuthMachine>) => !state.hasTag('loading'),
    );
    return nhost;
};

export const getNhostSession = async (
    backendUrl: string,
    context: GetServerSidePropsContext,
): Promise<{ nhost: NhostClient; nhostAdmin: NhostClient; session: NhostSession | null }> => {
    const nhost = await createServerSideClient(backendUrl, context);
    const nhostAdmin = await createServerSideClient(backendUrl, context, true);
    const { accessToken, refreshToken, user } = nhost.auth.client.interpreter!.state.context;
    return {
        nhost,
        nhostAdmin,
        session: nhost.auth.isAuthenticated()
            ? {
                  accessToken: accessToken.value!,
                  accessTokenExpiresIn: (accessToken.expiresAt!.getTime() - Date.now()) / 1_000,
                  refreshToken: refreshToken.value!,
                  user: user!,
              }
            : null,
    };
};
