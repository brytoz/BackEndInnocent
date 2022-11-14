const router = require('express').Router()
const User = require('../models/User.js')
const {
  LoginValidation,
  RegValidation,
  TokenValidation,
  LandsValidation,
  passwordValidation,
} = require('../rules/validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Tokeen = require('../models/Tokens.js')
const Lands = require('../models/Lands.js')
const dotenv = require('dotenv')
const { validateToken } = require('./VerifyToken')
const { verify } = require('jsonwebtoken')
const upload = require('../rules/imageValidation')

dotenv.config()

// TOKENS
router.post('/tokens', async (req, res) => {
  // error message check
  const { value, error } = TokenValidation(req.body)

  if (error) {
    return res.send(error.details[0].message)
  }

  const { tokeen, status } = req.body

  //duplicate Token  check
  const tokenCheck = await Tokeen.findOne({
    where: { tokeen },
  })
  if (tokenCheck) return res.send('Token already exist')

  // send and save info - database
  const postMe = await Tokeen.create({
    tokeen,
    status,
  })
    .then((tokenInfo) => {
      res.send(tokenInfo)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

router.get('/getTokens', validateToken, (req, res) =>
  Tokeen.findAll()
    .then((data) => res.send(data))
    .catch((err) => console.log(err)),
)
// TOKENS

// LANDS
router.post('/lands', upload, async (req, res) => {
  const {
    tokeen,
    phone,
    plots,
    postedBy,
    state,
    city,
    community,
    message,
 
  } = req.body

  // error message check
  const { value, error } = LandsValidation(req.body)

  if (error) {
    return res.status(202).send(error.details[0].message)
  }

  //duplicate Token  check
  const tokenCheck = await User.findOne({
    where: { tokeen },
  })
  if (!tokenCheck) return res.status(202).send('Token does not exist')

  // send and save info - database
  const postMe = await Lands.create({
    tokeen,
    phone,
    plots,
    postedBy,
    state,
    city,
    community,
    message,
    image: req.file.path,
  })
    .then((landsInfo) => {
      res.status(200).send('Upload Successful')
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

router.get('/getAllLands', (req, res) =>
  Lands.findAll()
    .then((data) => res.send(data))
    .catch((err) => console.log(err)),
)
// LANDS

// USERS
router.post('/register', async (req, res) => {
  // error message check
  const { value, error } = RegValidation(req.body)

  if (error) {
    return res.send(error.details[0].message)
  }

  //Email duplucate check
  const emailCheck = await User.findOne({
    where: { email: req.body.email },
  })
  if (emailCheck) return res.status(202).send('Email already Exists')

  //Used Token  check
  const tokenCheck = await Tokeen.findOne({
    where: { tokeen: req.body.tokeen },
  })
  if (!tokenCheck) return res.status(202).send('Token doesnt exist')

  if (tokenCheck.status == 1)
    return res.status(202).send('This token has been used')

  //Phone number duplicate check
  const phoneCheck = await User.findOne({
    where: { phone: req.body.phone },
  })
  if (phoneCheck) return res.status(202).send('Phone Number  already Used')

  const { fullname, tokeen, email, phone } = req.body

  // encrypt the password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  // update Code status
  const codeStatus = await Tokeen.update({ status: 1 }, { where: { tokeen } })
  // send and save info - database
  const postMe = await User.create({
    fullname,
    tokeen,
    email,
    password: hashedPassword,
    phone,
  })
    .then((userInfo) => {
      res.status(200).send('Registered Successful')
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

router.get('/getAllUsers', (req, res) =>
  User.findAll()
    .then((data) => res.send(data))
    .catch((err) => console.log(err)),
)
// USERS

// LOGIN
router.post('/login', async (req, res) => {
  // error message check
  const { value, error } = LoginValidation(req.body)

  if (error) {
    return res.send(error.details[0].message)
  }

  const { email, password } = req.body

  //Email duplucate check
  const emailCheck = await User.findOne({
    where: { email },
  })
  if (!emailCheck) return res.status(202).send('Email doesnt Exists')

  //  check Password
  const passwordCheck = await bcrypt
    .compare(password, emailCheck.password)
    .then((result) => {
      if (!result) return res.status(200).send('Invalid Password')

      const giveToken = jwt.sign(
        {
          id: emailCheck.id,
        },
        process.env.SECRET,
        { expiresIn: '1h' },
      )

      const newCookie = res.cookie('user', giveToken, {
        maxAge: 24 * 60 * 60 * 1000,
        path: '/',
        // httpOnly: true,
        // secure:true,
        // signed: true
      })

      if (newCookie) {
        res.status(200).json({
          data: 'Success. Redirecting...',
          user: email,
          auth: true,
          loggedIn: true,
          cookie: req.cookies,
        })
      } else {
        res.clearCookie('user')
        res
          .status(202)
          .json({ auth: false, loggedIn: false, cookie: 'No cookies' })
      }
    })
})
 

//  get current user
router.get('/me', validateToken, async (req, res) => {
  var token =
    req.cookies.user ||
    req.headers['x-access-token'] ||
    req.headers['authorization']

  if (!token) {
    return res
      .status(400)
      .send('You cannot perform any activities until you are logged In')
  }

  verify(token, process.env.SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' })
    } else {
      req.decoded = decoded

      await User.findByPk(req.decoded.id, async (err, user) => {
        return (req.currentUser = user)
      })
        .then((data) => res.status(200).json({ data }))
        .catch((err) =>
          res.status(403).send('Unable to fetch your requested data'),
        )
    }
  })
})

router.post('/updatepassword', validateToken, async (req, res) => {
    // error message check
    const { value, error } = passwordValidation(req.body)
  
    if (error) {
      return res.status(202).send(error.details[0].message)
    }
  
    const { email } = req.body
  
    // encrypt the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
  
    // send and update info - database
    const postMe = await User.update(
      {
        password: hashedPassword,
      },
      { where: { email } },
    )
      .then((userInfo) => {
        res.status(200).send('Updated Successfully')
      })
      .catch((err) => {
        res
          .status(400)
          .send('I think something might be wrong with your internet connection')
      })
  })

  router.get('/logout', (req, res, next) => {
    console.log(req.cookies.user)
    if (req.cookies.user) {
      res.clearCookie('user')
      res.status(202).json({ auth: false, loggedIn: false, cookie: 'No cookies' })
      res.end()
    } else {
      res
        .status(202)
        .json({ auth: false, loggedIn: false, cookie: 'You are not logged in' })
      next()
    }
  
    next()
  })
   
module.exports = router
