const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    CategoryName: { // Corrected field name
        type: String,
        required: true,
    },
    imageUrl: { // Corrected field name
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
});

const Category = mongoose.model("Category", schema); // Renamed the model to "Category"
module.exports = Category;
