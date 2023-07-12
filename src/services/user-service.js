const { UserRepository } = require('../repository/index');


class UserService{
    constructor(){
        this.userRepo = new UserRepository();
    }

    async signup(data){
        try {
            const user = await this.userRepo.create(data);
            return user;
        } catch (error) {
            console.log('something went wrong in user layer');
            throw error;
        }
    }
}

module.exports = UserService