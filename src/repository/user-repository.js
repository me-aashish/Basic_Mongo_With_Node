const CrudRepository = require('./crud-repository');
const User = require('../model/user');

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

    async getUserByEmail(email){
        try {
            const user = await User.findOne({
                email : email
            })
            return user;
        } catch (error) {
            console.log('Something went wrong in repo layer ', error);
            throw error;
        }
    }
}

module.exports = UserRepository;