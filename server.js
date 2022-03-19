const express = require('express')

//dotenv allows us to separate our env from our source code.
//This is useful in case of any collaborative platform where all developers might be required to have a different specification
const dotenv = require('dotenv')

//morgan helps us to console our requests
const morgan = require('morgan')

const bodyparser = require('body-parser')
const path = require('path')

const app = express(); 
//initialised our app as a default express application

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

//log API requests
app.use(morgan('tiny'))//calling token tiny

//parse requests to body-parser
app.use(bodyparser.urlencoded({ extended:true }))//calling token tiny

//set view engine
app.set("view engine","ejs")

//load assets
app.use("/css", express.static(path.resolve(__dirname,"assets/css")))
app.use("/img", express.static(path.resolve(__dirname,"assets/img")))
app.use("/js", express.static(path.resolve(__dirname,"assets/js")))

//creating a default route
app.get('/', (request, response) => {
    response.send("Crud App")
})

//this request will be heard on port 3000

app.listen(3000, () => {
    //calback funtion
    console.log(`Server listening to http://localhost:${PORT}`)
})