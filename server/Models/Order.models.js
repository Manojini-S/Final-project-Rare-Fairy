const Mongoose = require ("mongoose");
const  schema = new Mongoose.Schema({
    OrederId:{
        type:String,
        required:type,
    },

    AriId:{
        type:String,
        required:type,
    },

    OrderBy:{
        type:String,
        required:type,
    },

    PaymentId:{
        type:String,
        required:type,
    },

    DeadLine:{
        type:String,
        required:type,
    },
})