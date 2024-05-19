const Mongoose = require ("mongoose");
const  schema = new Mongoose.Schema({
    ReviewId:{
        type:String,
        required:true,
    },

    Rating:{
        type:String,
        required:true,
    },

    ReviewBy:{
        type:String,
        required:true,
    },

    Description:{
        type:String,
        required:true,
    },
});

const Review = Mongoose.model("Review",schema);
module.exports  = Review;