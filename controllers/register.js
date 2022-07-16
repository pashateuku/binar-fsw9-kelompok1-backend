const user = require('../models');

const register = async (req,res)=>{

    try {
        const data = await user.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        return res.status(200).json("anda berhasil login");
    } catch (error) {
        
    }
   

    
}

module.exports = register;