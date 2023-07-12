const CrudRespository = require('../repository/crud-repository');
const comment = require('../model/comment')

class CommentRepository extends CrudRespository{
    constructor(){
        super(comment);
    }
}

module.exports = CommentRepository