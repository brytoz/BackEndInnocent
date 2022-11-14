const express = require('express') 
const app = express();
const db = require('./db/db')
const dotenv  = require('dotenv');
const authRoute = require('./router/auths')
const cookieParser = require('cookie-parser')
const cors = require("cors")
const multerError = require('./rules/handleError')

// enable secure credentials
dotenv.config()


app.use(cookieParser())

// parse application/json
app.use(express.json())

const corsOption = {
    origin: true,
    // origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
    optionSuccessStatus:200,
    maxAge: 3600
}


app.use(cors(corsOption))

// app.set('trust proxy', 1)
app.use('/uploads',  express.static('./uploads'))
app.use(multerError)


db.authenticate().then((res)=> console.log('Connection has been established successfully.')
).catch((err) => console.error('Unable to connect to the database:', err));


app.use('/api/user', authRoute)



app.listen(process.env.LOCAL_PORT, console.log("Connection started", process.env.LOCAL_PORT));