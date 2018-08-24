import express from 'express';
const app = express();
const PORT = 8080;
const os = require("os");
import bodyParser from 'body-parser';
import server from './graphql'
import graphlHTTP from 'express-graphql';


app.get('/api/', (request, response) => {
    return response.json({
        msg: 'Hello mota'
    })
})


app.use(express.static("dist"));
//app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.get("/api/getUsername", (req, res) =>
    res.send({ username: os.userInfo().username })
);
server.applyMiddleware({app})
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT} Graph ${server.graphqlPath}`);
});