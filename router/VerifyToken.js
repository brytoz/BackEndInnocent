const {verify}  = require('jsonwebtoken')
const dotenv  = require('dotenv');
dotenv.config()


const validateToken = (req,res,next) => {

    const grantedToken = req.cookies.grantToken;

    console.log(grantedToken)

    if(!grantedToken) return res.send("You are not logged In")

    try{
        const validToken = verify(grantedToken, process.env.SECRET)

        if(validToken) {
            return next();
        }
    }catch(err){
        res.clearCookie("grantToken")
        return res.send("Erro validating")
    }
}

module.exports = {validateToken}