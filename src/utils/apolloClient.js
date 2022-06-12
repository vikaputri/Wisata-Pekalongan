import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://wisata-pekalongan.herokuapp.com/',
  cache: new InMemoryCache()
});

export default client;