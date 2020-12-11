import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';

import { AuthProvider } from '../utils/auth';

import '../styles/globals.scss';
import { ThemeProvider } from 'react-jss';
import { DialogsProvider } from '../components/dialogs';
import { PageLayout } from '../containers/root/PageLayout';
import { defaultApolloClient } from '../api/apolloClient';

const theme = {};

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider session={pageProps.session}>
            <ApolloProvider client={defaultApolloClient}>
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <DialogsProvider>
                            <Head>
                                <title>Reshar.ed</title>
                                <link rel="icon" href="/favicon.ico" />
                            </Head>

                            <PageLayout>
                                <Component {...pageProps} />
                            </PageLayout>
                        </DialogsProvider>
                    </ThemeProvider>
                </AuthProvider>
            </ApolloProvider>
        </Provider>
    );
};

export default App;
