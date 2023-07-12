const TweetService = require('../services/tweet-service');

const tweetServiceObj = new TweetService();

const create = async(req,res) => {
    try {
        
        const response = await tweetServiceObj.create(req.body);
        res.status(201).json({
            success : true,
            message : 'Successfully created the tweet',
            data : response,
            err : {}
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'Something went wrong',
            data : {},
            err : error
        })
    }
}

const get = async(req,res) => {
    try {
        
        const response = await tweetServiceObj.get(req.params.id);
        res.status(201).json({
            success : true,
            message : 'Successfully fetched the tweet',
            data : response,
            err : {}
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'Something went wrong',
            data : {},
            err : error
        })
    }
}

module.exports = {
    create,
    get
}