const {user} = require('../models');

const register = async (req,res)=>{

    try {
        const data = user.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        return res.status(200)
            .json({
                message: "anda berhasil register",
                data: data
            });

    } catch (error) {
        
    }
   

    
}


module.exports = register;