import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { Provider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';

import { AuthProvider } from '../utils/auth';

import '../styles/globals.scss';
import { ThemeProvider } from 'react-jss';
import { DialogsProvider } from '../components/dialogs';

import { initSentry } from '../utils/sentry';
import { useApollo } from '../api/withApollo';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

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
    const apolloClient = useApollo(pageProps);

    return (
        <Provider session={pageProps.session}>
            <ApolloProvider client={apolloClient}>
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <DialogsProvider>
                            <Head>
                                <title>Reshared</title>
                                <link rel="icon" href="/favicon.ico" />
                                <script
                                    async
                                    defer
                                    data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
                                    src="https://plausible.io/js/plausible.js"></script>
                            </Head>

                            <Component {...pageProps} />
                        </DialogsProvider>
                    </ThemeProvider>
                </AuthProvider>
            </ApolloProvider>
        </Provider>
    );
};

export default App;
