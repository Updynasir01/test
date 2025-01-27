const express = require('express')
const route = express.Router()
const LoginSchema = require("../Model/logingSchema")




route.post("/Create", async(req,res)=>{
    const NewUser = LoginSchema (req.body)
    const SaveUser = await NewUser.save()
    if(SaveUser){
        res.send(SaveUser)
    }
})


module.exports = route