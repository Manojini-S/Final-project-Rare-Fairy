const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    CategoryName: { 
        type: String,
        required: true,
    },
    ProductName:{
        type: String,
        required: true, 
    },
    imageUrl: { 
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Price:{
        type:Number,
        required:true,
    }
});

const Category = mongoose.model("Category", schema); 
module.exports = Category;
