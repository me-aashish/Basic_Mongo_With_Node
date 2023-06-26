const express = require('express');
const app = express();
const connect = require('./config/database');

app.listen(3000, async() => {
    console.log('server started');
    await connect();
    console.log('connected to mongodb');
})