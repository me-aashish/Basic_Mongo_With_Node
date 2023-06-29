const CrudRepository = require('./crud-repository');
const Like = require('../model/like')

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }

    async findByUserAndLikeable(data){
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = LikeRepository