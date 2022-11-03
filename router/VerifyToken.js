const {verify}  = require('jsonwebtoken')
const dotenv  = require('dotenv');
dotenv.config()


const validateToken = (req,res,next) => {

    const grantedToken = req.cookies.user;

    console.log(grantedToken)

    if(!grantedToken) return res.send("You are not logged In")

    try{
        const validToken = verify(grantedToken, process.env.SECRET)

        if(validToken) {
             next();
        }
    }catch(err){
        res.clearCookie("user")
        return res.send("Erro validating")
    }
}

module.exports = {validateToken}