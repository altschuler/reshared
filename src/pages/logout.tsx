import { useAuthenticated, useSignOut } from '@nhost/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ErrorDisplay } from '../components/display';
import { PageLayout } from '../containers/root/PageLayout';
import { isServer } from '../utils/next';
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
    }, [isSuccess, isAuthenticated]);

    return (
        <PageLayout centered horizontal padded>
            One moment, signing you out...
            {error && <ErrorDisplay error={error.message} />}
        </PageLayout>
    );
};

export default LogoutPage;
