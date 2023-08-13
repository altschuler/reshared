import { UserPrivateDetailFragment, useUserPrivateDetailsQuery } from '../generated/graphql';
import { createContext, ReactNode, useContext, useMemo } from 'react';
import { useAuthenticationStatus, useUserId, useSignOut, useUserData, User } from '@nhost/nextjs';
import { useRouter } from 'next/router';
import { urlFor } from './urls';

export interface AuthContextState {
    user: User | null;
    userDetails: UserPrivateDetailFragment | null;
    userDetailsLoading: boolean;
    loading: boolean;
    isAuthenticated: boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextState>({
    user: null,
    userDetails: null,
    userDetailsLoading: true,
    loading: false,
    isAuthenticated: false,
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
    const router = useRouter();
    const user = useUserData();

    const meQuery = useUserPrivateDetailsQuery({
        skip: !userId,
        variables: { id: userId || '' },
        context: {
            headers: { 'x-hasura-role': 'me' },
        },
    });

    const ctxValue = useMemo(
        () => ({
            user,
            userDetails: meQuery.data?.user || null,
            userDetailsLoading: meQuery.loading,
            isAuthenticated,
            loading: isLoading || meQuery.loading,
            logout: () => {
                signOut.signOut();
                router.push(urlFor.root());
            },
        }),
        [meQuery.data?.user, meQuery.loading, isLoading, signOut, router, user],
    );

    return <AuthContext.Provider value={ctxValue}>{props.children}</AuthContext.Provider>;
};
