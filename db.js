const mongoose = require('mongoose');

const connDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/OCMS").then((result) => {
        console.log("connected!!!!");
    }).catch((err) => {
        console.log(err);
        
    });
}
module.exports = {connDB}