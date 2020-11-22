import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const hasuraClient = new ApolloClient({
    link: new HttpLink({
        fetch,
        uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
        headers: {
            'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
        },
    }),
    cache: new InMemoryCache(),
});

export const makeHasuraUserClient = (jwt: string) =>
    new ApolloClient({
        link: new HttpLink({
            fetch,
            uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
            headers: {
                Authorization: jwt,
            },
        }),
        cache: new InMemoryCache(),
    });
