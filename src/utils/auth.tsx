import { UserPrivateDetailFragment, useUserPrivateDetailsQuery } from '../generated/graphql';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useApollo } from '../api/withApollo';
import { ApolloProvider } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

export const RESHARED_AUTH_COOKIE_NAME = 'ratk';

export interface AuthContextState {
    user: UserPrivateDetailFragment | null;
    loading: boolean;
    token: string | null;
    login: () => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextState>({
    user: null,
    loading: false,
    token: null,
    login: async () => {
        /*noop*/
    },
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

const HASURA_CLAIMS_NAMESPACE = 'https://hasura.io/jwt/claims';

export const AuthProvider = (props: AuthProviderProps) => {
    const apolloClient = useApollo(props.pageProps);

    return (
        <ApolloProvider client={apolloClient}>
            <UserProvider>{props.children}</UserProvider>
        </ApolloProvider>
    );
};

export interface UserProviderProps {
    children: ReactNode;
}

const UserProvider = (props: UserProviderProps) => {
    const auth0 = useAuth0();
    const router = useRouter();
    const [, setCookie, removeCookie] = useCookies([RESHARED_AUTH_COOKIE_NAME]);
    const [id, setId] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const claims = await auth0.getIdTokenClaims();

            if (claims) {
                setCookie(RESHARED_AUTH_COOKIE_NAME, claims.__raw, { path: '/' });
                setToken(claims.__raw);
                setId(claims?.[HASURA_CLAIMS_NAMESPACE]?.['x-hasura-user-id'] || '');
            }
        })();
    }, [auth0, setCookie]);

    const meQuery = useUserPrivateDetailsQuery({ skip: !id, variables: { id: id || '' } });

    const loading = auth0.isLoading || meQuery.loading;
    const userDetails = meQuery.data?.users_by_pk || null;

    const ctxValue = useMemo(
        () => ({
            user: userDetails,
            token,
            loading,
            login: () => auth0.loginWithRedirect({ redirectUri: process.env.NEXT_PUBLIC_ROOT_URL }),
            logout: () => {
                removeCookie(RESHARED_AUTH_COOKIE_NAME, { path: '/' });
                auth0.logout();
                // router.push('/');
            },
        }),
        [userDetails, token, loading, auth0, removeCookie],
    );

    return <AuthContext.Provider value={ctxValue}>{props.children}</AuthContext.Provider>;
};
