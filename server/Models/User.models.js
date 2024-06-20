const Mongoose = require ("mongoose");
const  schema = new Mongoose.Schema({
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
    type: String,
    required:true,
},

Role: {
    type: String,
    required: true,
    default: 'user',
    enum: ['user', 'admin'] 
}

}
)
const User =Mongoose.model("User", schema);
module.exports = User;