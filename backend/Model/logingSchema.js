const mongoose = require("mongoose")

const loginShcema = mongoose.Schema({
    id :{
        type: String,
        required: true,
    },
    password :{
        type: String,
        required: true,
    }
})
module.exports = mongoose.model("login", loginShcema)
