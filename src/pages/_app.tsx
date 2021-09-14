import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';

import { AuthProvider } from '../utils/auth';

import '../styles/globals.scss';
import { ThemeProvider } from 'react-jss';
import { DialogsProvider } from '../components/dialogs';

import { initSentry } from '../utils/sentry';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Auth0Provider } from '@auth0/auth0-react';

// Loading bar
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
if (!(typeof window === 'undefined')) {
    NProgress.configure({ showSpinner: false });
}

// Error logging
initSentry();

const theme = {};

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Auth0Provider
            useRefreshTokens
            clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
            domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
            cacheLocation="localstorage">
            <AuthProvider pageProps={pageProps}>
                <ThemeProvider theme={theme}>
                    <DialogsProvider>
                        <Head>
                            <title>Reshared</title>
                            <link rel="icon" href="/favicon.ico" />
                            <script
                                async
                                defer
                                data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
                                src="https://plausible.io/js/plausible.js"
                            />
                        </Head>

                        <Component {...pageProps} />
                    </DialogsProvider>
                </ThemeProvider>
            </AuthProvider>
        </Auth0Provider>
    );
};

export default App;
