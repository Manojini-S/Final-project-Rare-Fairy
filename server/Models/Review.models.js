const Mongoose = require ("mongoose");
const  schema = new Mongoose.Schema({
    ReviewId:{
        Type:String,
        required:true,
    },

    Rating:{
        Type:String,
        required:true,
    },

    ReviewBy:{
        Type:String,
        required:true,
    },

    Description:{
        Type:String,
        required:true,
    },
})