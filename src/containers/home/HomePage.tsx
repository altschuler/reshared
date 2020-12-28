import React from 'react';
import { isEmpty } from 'lodash';
import { useAuth } from '../../utils/auth';
import { PageLayout } from '../root/PageLayout';
import { Dashboard } from './Dashboard';

export const HomePage = () => {
    const auth = useAuth();

    if (!auth.user) {
        return <PageLayout>CTA</PageLayout>;
    }

    if (isEmpty(auth.user.memberships)) {
        return <PageLayout>Onboarding</PageLayout>;
    }

    return <Dashboard />;
};
