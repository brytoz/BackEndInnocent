const express = require('express') 
const app = express();
const db = require('./db/db')
const dotenv  = require('dotenv');
const authRoute = require('./router/auths')
const cookieParser = require('cookie-parser')
const cors = require("cors")
// enable secure credentials
dotenv.config()


app.use(cookieParser())

// parse application/json
app.use(express.json())

const corsOption = {
    origin: "*",
    credentials: true,
    credentials: true,
    optionSuccessStatus:200,
}

app.use(cors(corsOption))

db.authenticate().then((res)=> console.log('Connection has been established successfully.')
).catch((err) => console.error('Unable to connect to the database:', err));


app.use('/api/user', authRoute)


// test cookie
// app.get('/cook',  (req, res) => {
//     // Cookies that have not been signed
//     // console.log('Cookies: ', req.cookies)
  
//     // Cookies that have been signed
//     // console.log('Signed Cookies: ', req.signedCookies)
//     res.clearCookie("grantToken")
//     console.log('Cookies: ', req.cookies)

//   })
  

app.listen(process.env.LOCAL_PORT, console.log("Connection started", process.env.LOCAL_PORT));