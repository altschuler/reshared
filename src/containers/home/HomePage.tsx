import React from 'react';
import { isEmpty } from 'lodash-es';
import { useAuth } from '../../utils/auth';
import { Dashboard } from './Dashboard';
import { Onboarding } from './Onboarding';
import { Spin } from 'antd';

// TODO: preload user details here
export const HomePage = () => {
    const auth = useAuth();

    if (auth.userDetailsLoading) {
        return <Spin />;
    }

    return isEmpty(auth.userDetails?.memberships) ? <Onboarding /> : <Dashboard />;
};
