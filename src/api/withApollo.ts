import { useMemo } from 'react';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { makeApolloClient } from './apolloClient';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { GetIdTokenClaimsFn } from './types';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = (token?: string | null, getIdTokenClaimsFn?: GetIdTokenClaimsFn) => {
    return makeApolloClient(typeof window === 'undefined', token, getIdTokenClaimsFn);
};
export const initializeApollo = (
    initialState: any = null,
    token?: string | null,
    getIdTokenClaimsFn?: GetIdTokenClaimsFn,
) => {
    const _apolloClient = apolloClient ?? createApolloClient(token, getIdTokenClaimsFn);

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract();

        // Merge the existing cache into data passed from getStaticProps/getServerSideProps
        const data = merge(initialState, existingCache, {
            // combine arrays using object equality (like in sets)
            arrayMerge: (destinationArray, sourceArray) => [
                ...sourceArray,
                ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
            ],
        });

        // Restore the cache with the merged data
        _apolloClient.cache.restore(data);
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
};

export const addApolloState = (client: ApolloClient<NormalizedCacheObject> | null, pageProps) => {
    if (pageProps?.props && client) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
    }

    return pageProps;
};

export const useApollo = (pageProps) => {
    const { getIdTokenClaims } = useAuth0();
    const state = pageProps[APOLLO_STATE_PROP_NAME];

    return useMemo(
        () => initializeApollo(state, null, getIdTokenClaims),
        [getIdTokenClaims, state],
    );
};
