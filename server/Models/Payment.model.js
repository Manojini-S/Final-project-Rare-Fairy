const Mongoose = require ("mongoose");
const schema = new Mongoose.Schema({

    PaidAmount:{
        type:Number,
        required:true,
    },

    PaidBy:{
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

