import React from 'react';
import { isEmpty } from 'lodash-es';
import { useAuth } from '../../utils/auth';
import { Dashboard } from './Dashboard';
import { Onboarding } from './Onboarding';

export const HomePage = () => {
    const auth = useAuth();

    return isEmpty(auth.user?.memberships) ? <Onboarding /> : <Dashboard />;
};
