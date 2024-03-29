import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import Script from 'next/script';

import { UserProvider } from '../utils/auth';

import { ThemeProvider } from 'react-jss';
import { DialogsProvider } from '../components/dialogs';
import '../styles/globals.scss';

import { NhostClient, NhostProvider, NhostSession } from '@nhost/nextjs';
import { NhostApolloProvider } from '@nhost/react-apollo';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { isServer } from '../utils/next';
import { InMemoryCache } from '@apollo/client';

// Loading bar
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

if (!isServer) {
    NProgress.configure({ showSpinner: false });
}

const nhost = new NhostClient({
    subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
    region: process.env.NEXT_PUBLIC_NHOST_REGION,
});

const theme = {};

const App = ({
    Component,
    pageProps,
}: AppProps<{ nhostSession: NhostSession; apolloCache?: any }>) => {
    const cache = pageProps.apolloCache
        ? new InMemoryCache().restore(pageProps.apolloCache)
        : undefined;
    return (
        <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
            <NhostApolloProvider cache={cache} nhost={nhost}>
                <UserProvider>
                    <ThemeProvider theme={theme}>
                        <DialogsProvider>
                            <Head>
                                <title>Reshared | Share things with your community</title>
                                <meta
                                    name="description"
                                    content="Reshared facilitates, encourages and organizes sharing within your local community"
                                    key="desc"
                                />
                                <link rel="icon" href="/favicon.ico" />
                                <link
                                    rel="apple-touch-icon"
                                    sizes="180x180"
                                    href="/apple-touch-icon.png"
                                />
                                <link
                                    rel="icon"
                                    type="image/png"
                                    sizes="32x32"
                                    href="/favicon-32x32.png"
                                />
                                <link
                                    rel="icon"
                                    type="image/png"
                                    sizes="16x16"
                                    href="/favicon-16x16.png"
                                />
                                <link rel="manifest" href="/site.webmanifest" />
                            </Head>

                            <Script
                                async
                                defer
                                data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
                                src="https://plausible.io/js/plausible.js"
                            />

                            <Component {...pageProps} />
                        </DialogsProvider>
                    </ThemeProvider>
                </UserProvider>
            </NhostApolloProvider>
        </NhostProvider>
    );
};

export default App;
