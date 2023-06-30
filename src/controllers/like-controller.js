const LikeService = require('../services/like-service');
const likeServiceObj = new LikeService();

const toogleLike = async(req,res) => {
    try {
        const response = await likeServiceObj.toogleLike(req.query.modelId, req.query.modelType, req.body.userId);
        res.status(201).json({
            success : true,
            message : 'Successfully toggled the like',
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
    toogleLike
}