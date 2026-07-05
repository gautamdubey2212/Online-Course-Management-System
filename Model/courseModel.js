const mongoose = require('mongoose');

const courseschema = mongoose.Schema({
    Cname:{
        type:String,
        enum:["JAVA","MERN","MEAN","PYTHON","BACKEND"],
        required:true
    },
    Tname:{
        type:String,
        enum:["Harshal","Laksh","Gautam","Mithi","Sumit"],
        required:true
    },
    Duration:{
        type:Number,
        required:true
    },
    Fees:{
        type:String,
        required:true
    },
},
{timestamps:true});

const coursemodel = mongoose.model("course",courseschema);

module.exports = coursemodel;