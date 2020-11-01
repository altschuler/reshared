﻿import nhostSdk from 'nhost-js-sdk';
import { useAuth as useNhostAuth } from 'react-nhost';
import { useEffect, useMemo } from 'react';
import { useUserDetailsLazyQuery } from '../generated/graphql';

nhostSdk.initializeApp({
    base_url: process.env.NEXT_PUBLIC_NHOST_URL!,
    ssr: typeof window === 'undefined',
});

export const nhost = {
    auth: nhostSdk.auth(),
    storage: nhostSdk.storage(),
};

export const useAuth = () => {
    const nhostAuth = useNhostAuth();
    const [getUserDetails, query] = useUserDetailsLazyQuery();
    const userId = useMemo(() => {
        console.log('getting claim');
        return nhostAuth.signedIn ? nhost.auth.getClaim('x-hasura-user-id') : null;
    }, [nhostAuth.signedIn]);

    // Load user
    useEffect(() => {
        if (userId) {
            getUserDetails({ variables: { id: userId } });
        }
    }, [userId]);

    const user = useMemo(() => {
        return (userId && query.data?.users_by_pk) || null;
    }, [userId, query]);

    return { user };
};
