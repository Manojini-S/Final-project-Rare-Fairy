const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
Producttype:{
    type:String,
    required:true,
},

Price:{
    type:String,
    required:true,
},

Payment:{
    type:Number,
    required:true,
},

Status:{
    type:String,
    required:true,
},

})

const admin = mongoose.model("Admin", schema);
module.exports = admin;
