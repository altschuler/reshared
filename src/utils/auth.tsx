import { UserPrivateDetailFragment, useUserPrivateDetailsQuery } from '../generated/graphql';
import { createContext, ReactNode, useContext, useMemo } from 'react';
import { useAuthenticationStatus, useUserId, useSignOut } from '@nhost/nextjs';
import { useRouter } from 'next/router';
import { urlFor } from './urls';

export interface AuthContextState {
    user: UserPrivateDetailFragment | null;
    loading: boolean;
    isAuthenticated: boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextState>({
    user: null,
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

    const meQuery = useUserPrivateDetailsQuery({
        skip: !userId,
        variables: { id: userId || '' },
        context: {
            headers: { 'x-hasura-role': 'me' },
        },
    });

    const ctxValue = useMemo(
        () => ({
            user: meQuery.data?.user || null,
            isAuthenticated,
            loading: isLoading || meQuery.loading,
            logout: () => {
                signOut.signOut();
                router.push(urlFor.root());
            },
        }),
        [meQuery.data?.user, meQuery.loading, isLoading, signOut, router],
    );

    return <AuthContext.Provider value={ctxValue}>{props.children}</AuthContext.Provider>;
};
