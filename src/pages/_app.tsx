import Head from 'next/head';
import type { AppProps } from 'next/app';
import { NhostApolloProvider, NhostAuthProvider } from 'react-nhost';
import { nhost } from '../utils/nhost';
import { PageLayout } from '../components/PageLayout';

import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => (
    <NhostAuthProvider auth={nhost.auth}>
        <NhostApolloProvider
            auth={nhost.auth}
            gqlEndpoint={process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}>
            <Head>
                <title>Reshar.ed</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PageLayout>
                <Component {...pageProps} />
            </PageLayout>
        </NhostApolloProvider>
    </NhostAuthProvider>
);

export default App;
