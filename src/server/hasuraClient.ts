import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// TODO: these should not be used
export const hasuraClient = new ApolloClient({
    link: new HttpLink({
        fetch,
        uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
        headers: {
            'x-hasura-admin-secret': process.env.NHOST_ADMIN_SECRET!,
        },
    }),
    cache: new InMemoryCache(),
    // Disable caching on the server
    defaultOptions: { query: { fetchPolicy: 'no-cache' } },
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
