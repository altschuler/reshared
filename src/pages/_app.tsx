import Head from 'next/head';
import type { AppProps } from 'next/app';
import { getSession, Provider } from 'next-auth/client';
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { PageLayout } from '../components/PageLayout';
import { AuthProvider } from '../utils/auth';

import '../styles/globals.scss';
import { ThemeProvider } from 'react-jss';
import { DialogsProvider } from '../components/dialogs/DialogProvider';

const authLink = setContext(async (_, { headers }) => {
    const session = await getSession();
    if (session?.token) {
        return { headers: { ...headers, Authorization: `Bearer ${session.token}` } };
    }
});

const apolloClient = new ApolloClient({
    link: ApolloLink.from([
        authLink,
        new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT }),
    ]),
    cache: new InMemoryCache(),
});

const theme = {};

const App = ({ Component, pageProps }: AppProps) => {
    console.log('url', process.env.NEXTAUTH_URL);
    return (
        <Provider session={pageProps.session}>
            <ApolloProvider client={apolloClient}>
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
