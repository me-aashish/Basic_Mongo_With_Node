const { TweetRepository, CommentRepository } = require('../repository/index');

class CommentService{
    constructor(){
        this.tweetRepo = new TweetRepository();
        this.commentRepo = new CommentRepository();
    }

    async createComment(modelId, modelType, userId, content){
        try {
            let commentable;
            if(modelType === 'Tweet'){
                commentable = await this.tweetRepo.get(modelId);
            }
            else if(modelType === 'Comment'){
                commentable = await this.commentRepo.get(modelId);
            }
            else{
                throw new Error('Unknown model type')
            }
            const comment = await this.commentRepo.create({
                content : content,
                user : userId,
                onModel : modelType,
                commentable : modelId,
                comments : []
            })
            commentable.comments.push(comment);
            await commentable.save();

            return comment;
        } catch (error) {
            console.log('Something went wrong on service layer');
            throw error;
        }
    }
}

module.exports = CommentService