﻿import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const apollo = new ApolloClient({
    link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
        fetch,
        headers: {
            'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET,
        },
    }),
    cache: new InMemoryCache(),
});
