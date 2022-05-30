import { UserPrivateDetailFragment, useUserPrivateDetailsQuery } from '../generated/graphql';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useAuthenticationStatus, useUserId, useSignOut } from '@nhost/nextjs';

export interface AuthContextState {
    user: UserPrivateDetailFragment | null;
    loading: boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextState>({
    user: null,
    loading: false,
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
    const { isLoading } = useAuthenticationStatus();
    const userId = useUserId();
    const signOut = useSignOut();

    const meQuery = useUserPrivateDetailsQuery({
        skip: !userId,
        variables: { id: userId || '' },
    });

    const ctxValue = useMemo(
        () => ({
            user: meQuery.data?.user || null,
            loading: isLoading || meQuery.loading,
            logout: () => {
                signOut.signOut();
            },
        }),
        [meQuery.data?.user, meQuery.loading, isLoading, signOut],
    );

    return <AuthContext.Provider value={ctxValue}>{props.children}</AuthContext.Provider>;
};
