import { useSession } from 'next-auth/client';
import { UserDetailFragment, useUserPrivateDetailsLazyQuery } from '../generated/graphql';
import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react';

export interface AuthContextState {
    user: UserDetailFragment | null;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextState>({ user: null, loading: false });

export const useAuth = () => {
    return useContext(AuthContext);
};

export interface AuthProviderProps {
    children: ReactNode;
}
export const AuthProvider = (props: AuthProviderProps) => {
    const [session, sessionLoading] = useSession();
    const [getMe, getMeQuery] = useUserPrivateDetailsLazyQuery();

    useEffect(() => {
        if (session?.user) {
            getMe({ variables: { id: session.id } });
        }
    }, [getMe, session]);

    const loading = sessionLoading || getMeQuery.loading;
    const user = getMeQuery.data?.users_by_pk || null;

    const ctxValue = useMemo(() => ({ user, loading }), [user, loading]);

    return <AuthContext.Provider value={ctxValue}>{props.children}</AuthContext.Provider>;
};
