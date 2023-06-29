const CrudRepository = require('./crud-repository');
const User = require('../model/user');

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
}

module.exports = UserRepository;