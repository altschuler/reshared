import { setContext } from '@apollo/client/link/context';
import { getSession } from 'next-auth/client';
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

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

export const makeApolloClient = (ssr: boolean) =>
    new ApolloClient({
        ssrMode: ssr,
        link: ApolloLink.from([authLink, splitLink]),
        cache: new InMemoryCache(),
    });
