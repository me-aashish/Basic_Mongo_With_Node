const CommentService = require('../services/comment-service');
const commentServiceObj = new CommentService();

const create = async(req,res) => {
    try {
        const comment = await commentServiceObj.createComment(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
        res.status(201).json({
            message : 'Successfully created a comment',
            sucess : true,
            data : comment,
            err : {}
        })
    } catch (error) {
        res.status(500).json({
            message : 'Something went wrong',
            sucess : false,
            data : {},
            err : error
        })
    }
}

module.exports = {
    create
}