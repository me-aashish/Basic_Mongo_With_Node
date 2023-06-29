const { LikeRepository, TweetRepository } = require('../repository/index');

class LikeService{
    constructor(){
        this.likeRepoObj = new LikeRepository();
        this.tweetRepoObj = new TweetRepository();
    }

    async toogleLike(modelId, modelType, userId){
        let isAdded;
        if(modelType === 'Tweet'){
            var likeable = await this.tweetRepoObj.get(modelId);
        }
        else if(modelType === 'Comment'){
            console.log('comment');
        }
        else{
            throw new Error('unknown model name given');
        }

        const exists = await this.likeRepoObj.findByUserAndLikeable({
            user : userId,
            onModel : modelType,
            likeable : modelId
        })

        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.deleteOne();
            isAdded = false;
        }
        else{
            const newLike = await this.likeRepoObj.create( {
                user : userId,
                onModel : modelType,
                likeable : modelId
            });

            likeable.likes.push(newLike);
            await likeable.save();
            isAdded = true;
        }

        return isAdded;
    }
}

module.exports = LikeService;