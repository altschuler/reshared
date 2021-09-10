import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { GetIdTokenClaimsOptions, IdToken } from '@auth0/auth0-react';
import { GetIdTokenClaimsFn } from './types';

const makeAuthLink = (token?: string | null, getIdTokenClaimsFn?: GetIdTokenClaimsFn) => {
    return setContext(async (_, { headers }) => {
        if (token) {
            console.log('makeAuthLink: set token');
            console.log(token);
            return { headers: { ...headers, Authorization: `Bearer ${token}` } };
        } else if (getIdTokenClaimsFn) {
            console.log('makeAuthLink: getIdTokenClaimsFn');
            const idToken = await getIdTokenClaimsFn();
            console.log(idToken);
            return { headers: { ...headers, Authorization: `Bearer ${idToken.__raw}` } };
        }
    });
};

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT });

// Don't use WS link during SSR
const makeWsLink = (getIdTokenClaimsFn?: GetIdTokenClaimsFn) =>
    new WebSocketLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_WS!,
        options: {
            lazy: true,
            reconnect: true,
            connectionParams: async () => {
                if (getIdTokenClaimsFn) {
                    const idToken = await getIdTokenClaimsFn();
                    if (idToken) {
                        return { headers: { Authorization: `Bearer ${idToken.__raw}` } };
                    }
                }
            },
        },
    });

const makeSplitLink = (getIdTokenClaimsFn?: GetIdTokenClaimsFn) => {
    if (typeof window !== 'undefined' && getIdTokenClaimsFn) {
        return split(
            ({ query }) => {
                const definition = getMainDefinition(query);
                return (
                    definition.kind === 'OperationDefinition' &&
                    definition.operation === 'subscription'
                );
            },
            makeWsLink(getIdTokenClaimsFn),
            httpLink,
        );
    }
    return httpLink;
};

export const makeApolloClient = (
    ssr: boolean,
    token?: string | null,
    getIdTokenClaimsFn?: (options?: GetIdTokenClaimsOptions) => Promise<IdToken>,
) =>
    new ApolloClient({
        ssrMode: ssr,
        link: ApolloLink.from([
            makeAuthLink(token, getIdTokenClaimsFn),
            makeSplitLink(getIdTokenClaimsFn),
        ]),
        cache: new InMemoryCache(),
    });
