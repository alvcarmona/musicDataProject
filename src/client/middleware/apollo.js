import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import 'unfetch/polyfill';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

client
  .query({
    query: gql`
    query {
      sites{name}
    }
    `
  })
  .then(result => console.log(result));

module.exports = { client };
