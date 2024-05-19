const Mongoose = require ("mongoose");
const schema = new Mongoose.Schema({
    PaymentId:{
       type:String,
       required:true,
    },

    PaidAmount:{
        type:Number,
        required:true,
    },

    PaidBy:{
        type:String,
        required:true,
    },

    OrderId:{
        type:String,
        required:true,
    },

    PaymentType:{
        type:String,
        required:true,
    },
});

const payment =Mongoose.model("Payment", schema);
module.exports = payment;
