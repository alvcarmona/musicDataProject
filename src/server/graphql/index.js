import {typeDefs,resolvers} from './chart'
const { GraphQLServer } = require('graphql-yoga')
// The GraphQL schema

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

export default server