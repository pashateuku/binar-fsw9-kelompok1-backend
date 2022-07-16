const {user} = require('../models');

//import jwt config
const jwt = require('../config/jwt'); 

const login = async (req,res)=>{
    try {
        const data = user.findOne({
            where : {username: req.body.username}
        });
    
        if(!data.email== req.body.email || data.username == req.body.username){
            return res.status(400)
            .json({
                message: "username atau email yang anda masukkan salah"
            });
        } else if (!data.password==req.body.password){
            return res.status(400)
            .json({
                message: "password yang anda masukkan salah"
            })
        };

        return res.status(200)
        .json({message:"anda berhasil login"})
    } catch (error) {
        
    }
}

module.exports= login;