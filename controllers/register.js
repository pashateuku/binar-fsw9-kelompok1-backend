const {user} = require('../models');

// const register = async (req,res)=>{

//     try {
//         const data = await db.user.create({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password
//         });

//         return res.status(200).json("anda berhasil register");

//     } catch (error) {
        
//     }
   

    
// }

function register(req,res){

    user.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(()=>{
        res.status(200).json({message:"kamu berhasil login"});
    });


}

module.exports = {register};