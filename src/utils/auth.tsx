import { useSession } from 'next-auth/client';
import { UserPrivateDetailFragment, useUserPrivateDetailsQuery } from '../generated/graphql';
import { createContext, ReactNode, useContext, useMemo } from 'react';

export interface AuthContextState {
    user: UserPrivateDetailFragment | null;
    token: string | null;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextState>({
    user: null,
    loading: false,
    token: null,
});

export const useAuth = () => {
    return useContext(AuthContext);
};

export interface AuthProviderProps {
    children: ReactNode;
}
export const AuthProvider = (props: AuthProviderProps) => {
    const [session, sessionLoading] = useSession();

    const id = session?.id;

    const meQuery = useUserPrivateDetailsQuery({ skip: !id, variables: { id } });

    const loading = sessionLoading || meQuery.loading;
    const user = meQuery.data?.users_by_pk || null;

    const ctxValue = useMemo(() => ({ user, loading, token: session?.token || null }), [
        user,
        loading,
        session,
    ]);

    return <AuthContext.Provider value={ctxValue}>{props.children}</AuthContext.Provider>;
};
