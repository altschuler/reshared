import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { decodeToken, hasuraClient, JwtToken } from '../server';
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { addApolloState, initializeApollo } from '../api/withApollo';
import { UserPrivateDetailsDocument } from '../generated/graphql';
import { RESHARED_AUTH_COOKIE_NAME } from './auth';

interface BaseGSSPData<TParams extends ParsedUrlQuery> {
    serverClient: ApolloClient<NormalizedCacheObject>;
    token: JwtToken | null;
    nextCtx: GetServerSidePropsContext<TParams>;
}

interface AuthenticatedGSSPData<TParams extends ParsedUrlQuery> extends BaseGSSPData<TParams> {
    userClient: ApolloClient<NormalizedCacheObject>;
}

interface UnauthenticatedGSSPData<TParams extends ParsedUrlQuery> extends BaseGSSPData<TParams> {
    userClient?: ApolloClient<NormalizedCacheObject> | null;
}

type GSSPData<TParams extends ParsedUrlQuery> =
    | AuthenticatedGSSPData<TParams>
    | UnauthenticatedGSSPData<TParams>;

interface BaseGSSPOptions<TProps> {
    emptyProps?: TProps;
    preloadUser?: boolean;
}

interface PublicGSSPOptions<TProps, TParams extends ParsedUrlQuery>
    extends BaseGSSPOptions<TProps> {
    handler?: (
        data: GSSPData<TParams>,
    ) => Promise<GetServerSidePropsResult<TProps> | null | undefined | void>;
    requireAuth?: false;
}

interface AuthenticatedGSSPOptions<TProps, TParams extends ParsedUrlQuery>
    extends BaseGSSPOptions<TProps> {
    requireAuth: true;
    handler?: (
        data: AuthenticatedGSSPData<TParams>,
    ) => Promise<GetServerSidePropsResult<TProps> | null | undefined | void>;
}

type GSSPOptions<TProps, TParams extends ParsedUrlQuery> =
    | PublicGSSPOptions<TProps, TParams>
    | AuthenticatedGSSPOptions<TProps, TParams>;

export const makeGSSP = <TProps, TParams extends ParsedUrlQuery>(
    options: GSSPOptions<TProps, TParams>,
): GetServerSideProps<TProps, TParams> => {
    return async (ctx: GetServerSidePropsContext<TParams>) => {
        const idToken = ctx.req.cookies[RESHARED_AUTH_COOKIE_NAME]; // ctx.req.headers.authorization; //getSession(ctx.req, ctx.res);
        const token = idToken ? decodeToken(idToken) : null;

        if (options.requireAuth && !token) {
            return { redirect: { statusCode: 302, destination: '/login' } };
        }

        // Run handler
        const userClient = token ? initializeApollo(null, idToken) : null;
        if (userClient && token) {
            if (token && options.preloadUser) {
                // Disabled because we fetch it way too often
                await userClient.query({
                    query: UserPrivateDetailsDocument,
                    variables: { id: token.id },
                });
            }
        }

        const result =
            options.handler &&
            (await options.handler({
                token,
                userClient: userClient as any,
                serverClient: hasuraClient,
                nextCtx: ctx,
            }));

        let res: GetServerSidePropsResult<TProps> = result || {
            props: options.emptyProps || ({} as any),
        };

        // Add session to props
        if ((res as any).props) {
            res = { props: { ...(res as any).props } };
        }

        // Add apollo cache to pageProps so they'll be available on the client
        return addApolloState(userClient, res);
    };
};
