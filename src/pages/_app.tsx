import Head from 'next/head';
import type { AppProps } from 'next/app';
import { getSession, Provider } from 'next-auth/client';
import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
    split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';

import { AuthProvider } from '../utils/auth';

import '../styles/globals.scss';
import { ThemeProvider } from 'react-jss';
import { DialogsProvider } from '../components/dialogs/DialogProvider';
import { getMainDefinition } from '@apollo/client/utilities';
import { PageLayout } from '../containers/root/PageLayout';

const authLink = setContext(async (_, { headers }) => {
    const session = await getSession();
    if (session?.token) {
        return { headers: { ...headers, Authorization: `Bearer ${session.token}` } };
    }
});

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT });

// Don't use WS link during SSR
const wsLink = process.browser
    ? new WebSocketLink({
          uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_WS!,
          options: {
              reconnect: true,
              connectionParams: async () => {
                  const session = await getSession();
                  if (session?.token) {
                      return { headers: { Authorization: `Bearer ${session.token}` } };
                  }
              },
          },
      })
    : null;

const splitLink = wsLink
    ? split(
          ({ query }) => {
              const definition = getMainDefinition(query);
              return (
                  definition.kind === 'OperationDefinition' &&
                  definition.operation === 'subscription'
              );
          },
          wsLink,
          httpLink,
      )
    : httpLink;

const apolloClient = new ApolloClient({
    link: ApolloLink.from([authLink, splitLink]),
    cache: new InMemoryCache(),
});

const theme = {};

const App = ({ Component, pageProps }: AppProps) => {
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
