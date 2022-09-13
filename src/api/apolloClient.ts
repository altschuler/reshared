import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { createClient } from 'graphql-ws';

/*
const makeAuthLink = (token?: string | null) => {
    return setContext(async (_, { headers }) => {
        if (token) {
            console.log('makeAuthLink: set token');
            console.log(token);
            return { headers: { ...headers, Authorization: `Bearer ${token}` } };
        }
        // TODO(nhost): set token
        // else if (getIdTokenClaimsFn) {
        //     console.log('makeAuthLink: getIdTokenClaimsFn');
        //     const idToken = await getIdTokenClaimsFn();
        //     console.log(idToken);
        //     return { headers: { ...headers, Authorization: `Bearer ${idToken.__raw}` } };
        // }
    });
};

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT });

// {
//     options: {
//         lazy: true,
//             reconnect: true,
//                 connectionParams: async () => {
//                     // TODO(nhost): set token
//                     // if (getIdTokenClaimsFn) {
//                     //     const idToken = await getIdTokenClaimsFn();
//                     //     if (idToken) {
//                     //         return { headers: { Authorization: `Bearer ${idToken.__raw}` } };
//                     //     }
//                     // }
//                 },
//         },
const makeWsLink = () =>
    new GraphQLWsLink(
        createClient({
            url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_WS!,
            lazy: true,
            connectionParams: async () => {
                nhost
                return undefined;
            },
        }),
    );

// Don't use WS link during SSR
const makeSplitLink = () => {
    if (typeof window !== 'undefined') {
        return split(
            ({ query }) => {
                const definition = getMainDefinition(query);
                return (
                    definition.kind === 'OperationDefinition' &&
                    definition.operation === 'subscription'
                );
            },
            makeWsLink(),
            httpLink,
        );
    }
    return httpLink;
};

export const makeApolloClient = (ssr: boolean, token?: string | null) =>
    new ApolloClient({
        ssrMode: ssr,
        link: ApolloLink.from([makeAuthLink(token), makeSplitLink()]),
        cache: new InMemoryCache(),
    });

    */
export const LOL = 'haha';
