import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';

import { AuthProvider } from '../utils/auth';

import '../styles/globals.scss';
import { ThemeProvider } from 'react-jss';
import { DialogsProvider } from '../components/dialogs';
import { defaultApolloClient } from '../api/apolloClient';

import { initSentry } from '../utils/sentry';

initSentry();

const theme = {};

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider session={pageProps.session}>
            <ApolloProvider client={defaultApolloClient}>
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <DialogsProvider>
                            <Head>
                                <title>Reshared</title>
                                <link rel="icon" href="/favicon.ico" />
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
