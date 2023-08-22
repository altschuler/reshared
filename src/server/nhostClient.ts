import { createApolloClient } from '@nhost/apollo';
import { NhostClient } from '@nhost/nextjs';

const nhostAdminClient = new NhostClient({
    subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
    region: process.env.NEXT_PUBLIC_NHOST_REGION,
    adminSecret: process.env.NHOST_ADMIN_SECRET,
});

export const adminClient = createApolloClient({ nhost: nhostAdminClient });

export const makeUserClient = (jwt: string) => {
    const nhost = new NhostClient({
        subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
        region: process.env.NEXT_PUBLIC_NHOST_REGION,
    });

    nhost.graphql.setAccessToken(jwt);

    return createApolloClient({ nhost });
};
