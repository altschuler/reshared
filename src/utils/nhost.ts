import { GetServerSidePropsContext } from 'next';

import {
    NhostClient,
    NhostSession,
    getNhostSession as getNhostSession2,
    createServerSideClient,
} from '@nhost/nextjs';

// export const createServerSideClient = (admin?: boolean) =>
//     new NhostClient({
//         subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
//         region: process.env.NEXT_PUBLIC_NHOST_REGION,
//         adminSecret: admin ? process.env.NHOST_ADMIN_SECRET : undefined,
//         autoRefreshToken: false,
//         autoSignIn: true,
//     });

export const getNhostSession = async (
    context: GetServerSidePropsContext,
): Promise<{ nhost: NhostClient; nhostAdmin: NhostClient; session: NhostSession | null }> => {
    const connection = {
        subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
        region: process.env.NEXT_PUBLIC_NHOST_REGION,
    };

    const session = await getNhostSession2(connection, context);
    const nhost = await createServerSideClient(connection, context);
    const nhostAdmin = await createServerSideClient(connection, context);
    nhostAdmin.adminSecret = process.env.NHOST_ADMIN_SECRET!;

    return { nhost, nhostAdmin, session };
};
