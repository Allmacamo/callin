import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {client, AppNavigation} from './src/allmacamo';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppNavigation />
    </ApolloProvider>
  );
};

export default App;
