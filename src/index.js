const express = require('express');
const app = express();
const connect = require('./config/database');
const bodyParser = require('body-parser');

const setUpAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( { extended : true } ));

    app.listen(3000, async() => {
        console.log('server started');
        await connect();
        console.log('connected to mongodb');
    })
}

setUpAndStartServer();
