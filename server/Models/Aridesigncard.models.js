const Mongoose = require ("mongoose");
const  schema = new Mongoose.Schema({
    AriId:{
        Type:String,
        required:true,
    },

    ImageId:{
        Type:String,
        required:true
    },

    Title:{
        Type:String,
        required:true,
    },

    Price:{
        Type:String,
        required:true,
    },

    Type:{
        Type:String,
        required:true,
    },
}
   
)