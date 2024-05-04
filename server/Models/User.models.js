const Mongoose = require ("mongoose");
const  schema = new Mongoose.Schema({
UserId:{
    type:String,
    required:true,
},
 Name:{
    type:String,
    required:true,

},
Email:{
    type:String,
    required:true,
    unique: true,
},

Password:{
    type:Number,
    required:true,
},

Role:{
    type:String,
    required:true,
}

}
)
const User =Mongoose.model("User", schema);
module.exports = User;