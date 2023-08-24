import { createApolloClient } from '@nhost/apollo';
import { NhostClient } from '@nhost/nextjs';

export const adminClient = createApolloClient({
    nhost: new NhostClient({
        subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
        region: process.env.NEXT_PUBLIC_NHOST_REGION,
    }),
    fetchPolicy: 'no-cache',
    headers: {
        'x-hasura-admin-secret': process.env.NHOST_ADMIN_SECRET,
    },
});

export const makeUserClient = (jwt: string) =>
    createApolloClient({
        nhost: new NhostClient({
            subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
            region: process.env.NEXT_PUBLIC_NHOST_REGION,
        }),
        fetchPolicy: 'no-cache',
        headers: { Authorization: `Bearer ${jwt}` },
    });
