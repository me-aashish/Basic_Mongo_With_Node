const { UserRepository } = require('../repository/index');
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken')


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

    async signin(data){
        const user = await this.userRepo.getUserByEmail(data.email);

        if(!user){
            throw {
                message : 'no user with given email found'
            }
        }
        
        const passwordMatch = this.comparePassword(data.password, user.password);

        if(!passwordMatch){
            throw {
                message : 'incorrect password entered'
            }
        }

        const newToken = this.createToken({ email : user.email, id : user.id});

        return newToken;
    }

    comparePassword(plainPassword , encryptedPassword){
        try {
         return bcrypt.compareSync(plainPassword,encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in password comparison");
            throw error;
        }
     }
 
     createToken(user){
         try {
             const response = jwt.sign(user, process.env.JWT_KEY, {expiresIn:'1h'});
             return response;
         } catch (error) {
             console.log('Something went wrong in token creation');
             throw error;
         }
     }
 
     verifyToken(token){
        //  try {
        //      const response = jwt.verify(token, process.env.JWT_KEY);
        //      console.log(response)
        //     //  return response;
        //  } catch (error) {
        //     //  console.log('Something went wrong in token verification');
        //      throw {error};
        //     // throw new Error(error);
        //  }
        try {
            const response = jwt.verify(token, process.env.JWT_KEY);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
     }
}

module.exports = UserService