import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { User } from '@nhost/core';
import { getNhostSession } from './nhost';
import { createApolloClient } from '@nhost/apollo';
import { UserPrivateDetailsDocument } from '../generated/graphql';

interface BaseGSSPData<TParams extends ParsedUrlQuery> {
    serverClient: ApolloClient<NormalizedCacheObject>;
    user?: User;
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

// Make GetServerSideProps function
export const makeGSSP = <TProps extends object, TParams extends ParsedUrlQuery>(
    options: GSSPOptions<TProps, TParams>,
): GetServerSideProps<TProps, TParams> => {
    return async (ctx: GetServerSidePropsContext<TParams>) => {
        const { nhost, nhostAdmin, session } = await getNhostSession(
            process.env.NEXT_PUBLIC_NHOST_BACKEND_URL!,
            ctx,
        );
        const user = session?.user;

        if (options.requireAuth && !user) {
            return { redirect: { statusCode: 302, destination: '/login' } };
        }

        // Run handler
        const userClient =
            nhost &&
            createApolloClient({ nhost, graphqlUrl: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT! });

        const serverClient =
            nhostAdmin &&
            createApolloClient({
                nhost: nhostAdmin,
                graphqlUrl: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
            });

        if (userClient && user) {
            if (options.preloadUser) {
                await userClient.query({
                    query: UserPrivateDetailsDocument,
                    variables: { id: user.id },
                    context: {
                        headers: { 'x-hasura-role': 'me' },
                    },
                });
            }
        }

        const result =
            userClient &&
            options.handler &&
            (await options.handler({
                user: session?.user,
                userClient,
                serverClient,
                nextCtx: ctx,
            }));

        let res: GetServerSidePropsResult<TProps> = result || {
            props: options.emptyProps || ({} as any),
        };

        // Add session to props
        if ((res as any).props) {
            res = { props: { ...(res as any).props } };
        }

        return {
            ...res,
            props: {
                ...((res as any).props || {}),
                nhostSession: session,
                apolloCache: userClient.cache.extract(),
            },
        };
    };
};
