import express from 'express';
const app = express();
const PORT = 8080;
const os = require("os");
import server from './graphql'

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
    res.send({ username: os.userInfo().username })
);
server.applyMiddleware({app})
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT} Graph ${server.graphqlPath}`);
});