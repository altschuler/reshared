import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';

import { UserProvider } from '../utils/auth';

import '../styles/globals.scss';
import { ThemeProvider } from 'react-jss';
import { DialogsProvider } from '../components/dialogs';

import { initSentry } from '../utils/sentry';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { NhostNextProvider, NhostClient } from '@nhost/nextjs';
import { NhostApolloProvider } from '@nhost/react-apollo';

// Loading bar
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
if (!(typeof window === 'undefined')) {
    NProgress.configure({ showSpinner: false });
}

const nhost = new NhostClient({
    backendUrl: process.env.NEXT_PUBLIC_NHOST_BACKEND_URL || '',
    subdomain: process.env.NODE_ENV === 'development' ? 'localhost' : undefined,
});

// Error logging
initSentry();

const theme = {};

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
            <NhostApolloProvider nhost={nhost}>
                <UserProvider>
                    <ThemeProvider theme={theme}>
                        <DialogsProvider>
                            <Head>
                                <title>Reshared</title>
                                <link rel="icon" href="/favicon.ico" />
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
        </NhostNextProvider>
    );
};

export default App;
