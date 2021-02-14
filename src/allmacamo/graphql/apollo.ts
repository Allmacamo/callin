import {apiServer} from '../Constants';
import {ApolloClient, from, HttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

const endPoint = new HttpLink({
  uri: apiServer + '/graphql',
});

const authMiddleWare = setContext(async (_, {headers}) => {
  const token = ''; //await getJwt()
  const authorization = token ? `Bearer ${token}` : '';
  return {
    headers: {
      ...headers,
      authorization,
    },
  };
});

const client = new ApolloClient({
  link: from([authMiddleWare, endPoint]),
  cache: new InMemoryCache(),
});

export default client;
