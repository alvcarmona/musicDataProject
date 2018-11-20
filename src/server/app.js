import express from 'express';
const app = express();
const PORT = 8080;
const os = require("os");
import server from './graphql'

app.use(express.static("dist"));

server.express.use(app)

const options = {
    port: 8080,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
}

server.start(options, ({ port }) =>
    console.log(
        `Server started, listening on port ${port} for incoming requests.`,
    ),)
