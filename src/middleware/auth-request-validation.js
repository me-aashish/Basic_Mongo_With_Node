const UserService = require('../services/user-service');
const { UserRepository } = require('../repository/index')
const userServiceObj = new UserService();
const userRepoObj = new UserRepository();

const authRequestValidator = async(req, res, next) => {
    try {
        const token = req.headers['x-access-token'];
        const response = userServiceObj.verifyToken(token);
        console.log(response);
        if(!response){
            throw {error: "Invalid token"};
        }

        const user = await userRepoObj.get(response.id);

        if(!user){
            throw { error: "Invalid request. Please signup/signin first" };
        }

        req.user = user;
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'Something went wrong',
            data : {},
            err : error
        })  
       
    }
    
    next();
}

module.exports = authRequestValidator;
