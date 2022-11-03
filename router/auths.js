const router = require('express').Router();
const User = require('../models/User.js')
const { LoginValidation, RegValidation, TokenValidation, LandsValidation } = require('../rules/validation')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Tokeen = require('../models/Tokens.js');
const Lands = require('../models/Lands.js');
const dotenv  = require('dotenv');
const {validateToken} = require("./VerifyToken")


dotenv.config()


// TOKENS
router.post('/tokens',  async (req, res) => {
 
    
      // error message check
    const { value, error } = TokenValidation(req.body)

    if (error) {
      return res.send(error.details[0].message)
    }

    const {tokeen, status}  = req.body

    //duplicate Token  check 
    const tokenCheck = await Tokeen.findOne({
        where: { tokeen }
    })
    if(tokenCheck) return res.send("Token already exist")
 
    
    // send and save info - database
    const postMe = await Tokeen.create({
        tokeen,
        status,
    }).then((tokenInfo) => {
        res.send(tokenInfo)
    }).catch((err) => {
        res.status(400).send(err)
    })

})

router.get("/getTokens", validateToken, (req, res) => 
 
    Tokeen.findAll().then((data) => res.send(data)).catch((err) => console.log(err))

);
// TOKENS


// LANDS
router.post('/lands', async (req, res) => {


    const {tokeen, phone,plots,postedBy,state,city,community,message,image}  = req.body
    

    // error message check
    const { value, error } = LandsValidation(req.body)

    if (error) {
        return res.send(error.details[0].message)
    }
 
     
    
    //duplicate Token  check 
    const tokenCheck = await Lands.findOne({
        where: { tokeen }
    })
    if(tokenCheck) return res.send("Token already in Used")

    
    // send and save info - database
    const postMe = await Lands.create({
        tokeen, phone,plots,postedBy,state,city,community,message,image
    }).then((landsInfo) => {
        res.send(landsInfo)
    }).catch((err) => {
        res.status(400).send(err)
    })

})

router.get("/getAllLands", (req, res) => 
 
    Lands.findAll().then((data) => res.send(data)).catch((err) => console.log(err))

);
// LANDS


// USERS
router.post('/register',  async (req, res) => {

    // error message check
    const { value, error } = RegValidation(req.body)

    if (error) {
        return res.send(error.details[0].message)
    }


    //Email duplucate check 
    const emailCheck = await User.findOne({
        where: { email: req.body.email}
    })
    if(emailCheck) return res.send("Email already Exists")

    //Used Token  check 
    const tokenCheck = await User.findOne({
        where: { tokeen: req.body.tokeen }
    })
    if(tokenCheck) return res.send("Token already Used")

    //Phone number duplicate check 
    const phoneCheck = await User.findOne({
        where: { phone: req.body.phone,}
    })
    if(phoneCheck) return res.send("Phone Number  already Used")

    

    const {fullname, tokeen, email, phone}  = req.body
    
    // encrypt the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // send and save info - database
    const postMe = await User.create({
        fullname,
        tokeen,
        email,
        password:hashedPassword,
        phone,
    }).then((userInfo) => {
        res.send(userInfo)
    }).catch((err) => {
        res.status(400).send(err)
    })

})
 
router.get("/getAllUsers",(req, res) => 
 
    User.findAll().then((data) => res.send(data)).catch((err) => console.log(err))

);
// USERS



// LOGIN
router.post('/login', async (req, res) => {
    
    // error message check
    const { value, error } = LoginValidation(req.body)

    if (error) {
        return res.send(error.details[0].message)
    }


    const { email, password}  = req.body


    //Email duplucate check 
    const emailCheck = await User.findOne({
        where: { email}
    })
    if(!emailCheck) return res.send("Email doesnt Exists")

    //  check Password 
    const passwordCheck = await bcrypt.compare(password, emailCheck.password).then((result) => {
        if(!result) return res.send("Invalid Password")

        const giveToken = jwt.sign({
            id: emailCheck.id,
        }, process.env.SECRET, {expiresIn: 3000});

        const newCookie = res.cookie("user", giveToken , {
            // httpOnly: true,
        //     // secure:true,
            maxAge: 3600000,
            path: '/'
        //     // signed: true
        }
        )

        
        if(newCookie) {
            return res.status(200).json({auth: true,loggedIn: true, cookie:req.cookies})
            // res.end();

        } else {
            res.clearCookie('user')
            res.status(202).json({auth: false,loggedIn: false,  cookie:'No cookies'})
        }
    })
 
 
});

router.get('/login', async (req, res) => {
    if(req.cookies.user) {
        console.log(req.cookies.user)
        res.status(200).json({auth: true,loggedIn: true,cookie:req.cookies.user})
     } else {
        res.clearCookie('user')
        res.status(202).json({auth: false,loggedIn: false, cookie:'No cookies'})
     }
})



module.exports = router
