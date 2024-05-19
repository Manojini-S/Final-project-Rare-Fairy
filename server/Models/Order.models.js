const Mongoose = require ("mongoose");
const  schema = new Mongoose.Schema({
    OrderId:{
        type:String,
        required:true,
    },

    AriId:{
        type:String,
        required:true,
    },

    OrderBy:{
        type:String,
        required:true,
    },

    PaymentId:{
        type:String,
        required:true,
    },

    DeadLine:{
        type:String,
        required:true,
    },
});
const order =Mongoose.model("Order", schema);
module.exports = order;