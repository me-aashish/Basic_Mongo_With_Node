const express = require('express');

const app = express();

const connect = require('./config/database');

const Tweet = require('./model/tweet');

app.listen(3000, async() => {
    console.log('server started');
    await connect();
    console.log('coonected to mongodb');

    const tweet = await Tweet.create({
        content : "second tweet",
        // userEmail : "a@b.com"
    })

    console.log(tweet);
})