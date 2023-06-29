const CrudRepository = require('./crud-repository');
const Like = require('../model/like')

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }
}

module.exports = LikeRepository