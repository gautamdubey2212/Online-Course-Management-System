const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    Fname:{
        type:String,
        required:true
    },
   Email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Please enter a valid email address"]
   },
   Password:{
    type:String,
    required:true
   },
},
{timestamps:true});

const usermodel = mongoose.model("user",userschema);

module.exports = usermodel;