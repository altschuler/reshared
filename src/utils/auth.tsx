import { UserPrivateDetailFragment, useUserPrivateDetailsQuery } from '../generated/graphql';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useAuthenticationStatus, useUserId, useSignOut } from '@nhost/nextjs';

export interface AuthContextState {
    user: UserPrivateDetailFragment | null;
    loading: boolean;
    // token: string | null;
    // login: () => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextState>({
    user: null,
    loading: false,
    // token: null,
    // login: async () => {
    //     /*noop*/
    // },
    logout: async () => {
        /*noop*/
    },
});

export const useAuth = () => {
    return useContext(AuthContext);
};

export interface AuthProviderProps {
    children: ReactNode;
    pageProps: any;
}

export interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider = (props: UserProviderProps) => {
    const { isLoading, isAuthenticated } = useAuthenticationStatus();
    const userId = useUserId();
    const signOut = useSignOut();

    console.log(isAuthenticated, userId);
    const meQuery = useUserPrivateDetailsQuery({
        skip: !userId,
        variables: { id: userId || '' },
    });

    // const userDetails = meQuery.data?.user || null;

    console.log(meQuery.data?.user);

    const ctxValue = useMemo(
        () => ({
            user: meQuery.data?.user || null,
            // token,
            loading: isLoading || meQuery.loading,
            // login: () => auth0.loginWithRedirect({ redirectUri: process.env.NEXT_PUBLIC_ROOT_URL }),
            logout: () => {
                signOut.signOut();
                // router.push('/');
            },
        }),
        [meQuery.data?.user, meQuery.loading, isLoading, signOut],
    );

    return <AuthContext.Provider value={ctxValue}>{props.children}</AuthContext.Provider>;
};
