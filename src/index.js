const express = require('express');
const app = express();
const connect = require('./config/database');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
// const {UserRepository , TweetRepository} = require('./repository/index');
// const LikeService = require('./services/like-service');

const setUpAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( { extended : true } ));
    app.use('/api', apiRoutes);
    
    app.listen(3000, async() => {
        console.log('server started');
        await connect();
        console.log('connected to mongodb');

        // const userRepoObj = new UserRepository();
        // const tweetRepoObj = new TweetRepository();
        // const tweets = await tweetRepoObj.getAll(0,10);
        // const users = await userRepoObj.getAll();
        // const likeServiceObj = new LikeService();
        // await likeServiceObj.toogleLike(tweets[0].id,'Tweet',users[0].id);
        // const user = await userRepoObj.create({
        //     email : 'aashish@gmail.com',
        //     password : '12345',
        //     name : 'Aashish'
        // })
    });
}

setUpAndStartServer();
