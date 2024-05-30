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


// models/Payment.js
// const mongoose = require('mongoose');

// const paymentSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     amount: { type: Number, required: true },
//     status: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now }
    
// });

// const Payment = mongoose.model('Payment', paymentSchema);

// module.exports = Payment;

