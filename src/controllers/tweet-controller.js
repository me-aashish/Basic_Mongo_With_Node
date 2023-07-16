const TweetService = require('../services/tweet-service');
const tweetServiceObj = new TweetService();
const upload = require('../config/file-upload-s3-config');

const singleUploader = upload.single('image');

const create = async(req,res) => {
    try {
        singleUploader(req, res, async function(err, data){
            if(err){
                return res.status(500).json({
                    error : err
                })
            }
            const payload = {...req.body};
            payload.image = req.file.location;
            console.log(req.file);
            const response = await tweetServiceObj.create(payload);
            res.status(201).json({
                success : true,
                message : 'Successfully created the tweet',
                data : response,
                err : {}
            })
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
        console.log(req);
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