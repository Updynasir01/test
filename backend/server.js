const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

// Connect to MongoDb And Server
mongoose.connect("mongodb://localhost:27017/NajusLogin").then(()=>{
    console.log("Connected Has Been Successfully")
}).catch((err)=>{
    console.log(err)
})

const RegisterRouter = require('./Routes/LoginRoute')
app.use(RegisterRouter)

// Server Running with Port Number
app.listen(1000, (req,res)=>{
    console.log("Server Is Running SucccessFully 1000 Port Number")
})