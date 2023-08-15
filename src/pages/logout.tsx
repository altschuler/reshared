import { useAuthenticated, useSignOut } from '@nhost/nextjs';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ErrorDisplay } from '../components/display';
import { PageLayout } from '../containers/root/PageLayout';
import { isServer } from '../utils/next';
import { getNhostSession } from '../utils/nhost';
import { urlFor } from '../utils/urls';

export const LogoutPage = () => {
    const { signOut, error, isSuccess } = useSignOut();
    const isAuthenticated = useAuthenticated();
    const router = useRouter();

    useEffect(() => {
        signOut();
    }, []);

    useEffect(() => {
        if ((!isAuthenticated || isSuccess) && !isServer) {
            router.push(urlFor.root());
        }
    }, [isSuccess, isAuthenticated, isServer, router]);

    return (
        <PageLayout centered horizontal padded>
            One moment, signing you out...
            {error && <ErrorDisplay error={error.message} />}
        </PageLayout>
    );
};

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
// const { nhost, session } = await getNhostSession(ctx);
//
// if (!session?.user) {
// return { redirect: { statusCode: 302, destination: '/' } };
// }
//
// await nhost.auth.signOut();
//
// return { props: { nhostSession: null, apolloCache: null } };
// };

export default LogoutPage;
