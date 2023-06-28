const express = require('express');
const app = express();
const connect = require('./config/database');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
// const service = require('./services/tweet-service');
// const hashRepo = require('./repository/hashtag-repository');

const setUpAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( { extended : true } ));
    app.use('/api', apiRoutes);
    
    app.listen(3000, async() => {
        console.log('server started');
        await connect();
        // let ser =  new service();
        // await ser.create( { content : "#CODE #TWEET"} )
        // let rep = new hashRepo();
        // const resp = await rep.findByName('second');
        // console.log(resp)
        console.log('connected to mongodb');
    })
}

setUpAndStartServer();
