const UserService = require('../services/user-service');
const userServiceObj = new UserService();

const signup = async(req,res) => {
    try {
        const response = await userServiceObj.signup({
            email : req.body.email,
            password : req.body.password,
            name : req.body.name
        });
        res.status(201).json({
            message : 'successfully signed up',
            success : true,
            data : response,
            err : {}
        })
    } catch (error) {
        res.status(500).json({
            message : 'something went wrong',
            success : false,
            data : {},
            err : error
        })
    }
}

module.exports = {
    signup
}