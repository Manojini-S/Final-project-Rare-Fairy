const Mongoose = require ("mongoose")
const schema = new Mongoose.schema({
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
    }

    PaymentType:{
        type:String,
        required:true,
    },
})