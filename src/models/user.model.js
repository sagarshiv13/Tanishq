const mongoose = require('mongoose');
const bcrypt = require("bcryptjs"); 

const userSchema = new mongoose.Schema({
    "title": {type: String, required: true},
    "f_name": {type: String, required: true},
    "l_name" : {type: String, required: true},
    "mob_num" : {type: Number, required: true},
    "email" : {type: String, required: true, unique: true},
    "password" : {type: String, required: true}
})


  

let User = mongoose.model("user", userSchema)
module.exports = User



