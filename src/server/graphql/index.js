const { ApolloServer, gql } = require('apollo-server-express');
import {typeDefs,resolvers} from './chart'
// The GraphQL schema

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

export default server