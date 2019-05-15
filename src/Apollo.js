import React, { useEffect, useState } from 'react';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { ApolloProvider } from 'react-apollo';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloClient } from 'apollo-client';
import { RetryLink } from 'apollo-link-retry';
import { ApolloLink, split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { isProduction } from './lib/config';
import auth from './lib/auth';
import Loader from './components/Loader';

function Apollo({ children }) {
  const [client, setClient] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const authToken = auth.getToken();

    let API_URL = process.env.REACT_APP_API_URL;
    if (navigator.userAgent === 'ReactSnap') {
      API_URL = process.env.REACT_APP_API_URL_PRERENDER;
    }

    const uploadLink = new createUploadLink({
      uri: process.env.REACT_APP_API_URL
    });



    const wsClient = new SubscriptionClient(API_URL.replace(/^http/, 'ws'), {
      timeout: 30000,
      inactivityTimeout: 0,
      reconnect: true,
      connectionParams: {
        authToken: authToken ? `Bearer ${authToken}` : ''
      }
    });

    const wsLink = new WebSocketLink(wsClient);

    const authLink = setContext((_, { headers }) => {
      const token = auth.getToken();
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          accept: ['application/json', 'application/graphql'],
          authorization: token ? `Bearer ${token}` : '',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'deny',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'no-referrer-when-downgrade'
        }
      };
    });

    const serverLink = split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      wsLink,
      authLink.concat(uploadLink)
    );

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
          if (!isProduction) {
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
          }
        });
      }
      if (networkError) {
        if (!isProduction) {
          console.log(`[Network error]: ${networkError}`);
          if (networkError.status > 500) {
            console.log('SERVER ERROR');
          }
        }
      }
    });

    const cache = new InMemoryCache();
    const retryLink = new RetryLink();

    const link = ApolloLink.from([errorLink, retryLink, serverLink]);

    const client = new ApolloClient({
      link,
      cache,
      connectToDevTools: !isProduction,
      shouldBatch: true
    });

    setClient(client);
    setLoaded(true);
  }, []);
  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <ApolloProvider client={client}>{children}</ApolloProvider>
      )}
    </>
  );
}

export default Apollo;
