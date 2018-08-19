import express from 'express';
const app = express();
const PORT = 8080;
import schema from './graphql/schema';
import bodyParser from 'body-parser';
import dbconnection from './mongoose'
const { ApolloServer, gql } = require('apollo-server-express');
const os = require("os");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
        hello: String
    }
`;



// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

app.get('/api/', (request, response) => {
    return response.json({
        msg: 'Hello mota'
    })
})


app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
    res.send({ username: os.userInfo().username })
);

server.applyMiddleware({ app });

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});