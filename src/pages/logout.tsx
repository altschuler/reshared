import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PageLayout } from '../containers/root/PageLayout';
import { useAuth } from '../utils/auth';
import { makeGSSP } from '../utils/gssp';
import { urlFor } from '../utils/urls';

export const LogoutPage = () => {
    const { user, loading, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (loading) {
            return;
        }

        if (user) {
            logout();
        } else {
            router.push(urlFor.home());
        }
    }, [user, loading]);

    return (
        <PageLayout centered horizontal padded>
            One moment, signing you out...
        </PageLayout>
    );
};

export default LogoutPage;

export const getServerSideProps = makeGSSP({
    handler: async (data) => {
        if (data.token?.id) {
            // ?????
            // return { redirect: { statusCode: 302 as 302 | 301, destination: '/' } };
        }
    },
});
