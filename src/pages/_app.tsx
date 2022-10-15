import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import Script from 'next/script';

import { UserProvider } from '../utils/auth';

import { ThemeProvider } from 'react-jss';
import { DialogsProvider } from '../components/dialogs';
import '../styles/globals.scss';

import { NhostClient, NhostNextProvider, NhostSession } from '@nhost/nextjs';
import { NhostApolloProvider } from '@nhost/react-apollo';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { isServer } from '../utils/next';

// Loading bar
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

if (!isServer) {
    NProgress.configure({ showSpinner: false });
}

const nhost = new NhostClient({
    backendUrl: process.env.NEXT_PUBLIC_NHOST_BACKEND_URL || '',
    subdomain: process.env.NODE_ENV === 'development' ? 'localhost' : undefined,
});

const theme = {};

const App = ({ Component, pageProps }: AppProps<{ nhostSession: NhostSession }>) => {
    return (
        <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
            <NhostApolloProvider nhost={nhost}>
                <UserProvider>
                    <ThemeProvider theme={theme}>
                        <DialogsProvider>
                            <Head>
                                <title>Reshared</title>
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
        </NhostNextProvider>
    );
};

export default App;
