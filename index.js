//require express and bodyparser
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const bookRoute = require('./Routes/Books')
const authorRoute = require('./Routes/Author')

//create instances
const app = express()


//middlewares
app.use(bodyParser.json())




//routes
app.use(bookRoute);
app.use(authorRoute);





//port
app.listen(3000, function () {
    mongoose.connect("mongodb+srv://CodetrainUser:Amish@cluster0.00dyl8q.mongodb.net/?retryWrites=true&w=majority",)
    .then(result =>{
        console.log("server started on port 3000")
    })
    
})