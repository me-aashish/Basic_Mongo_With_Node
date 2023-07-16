const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
        max : [250, "Content can't be more than 250 characters"]
    },
    hashtags: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Hashtag',
            // required : true
        }
    ],
    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Like',
            // required : true
        }
    ],
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment',
            // required : true
        }
    ],
    image : {
        type : String
    }
}, {timestamps : true})

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;