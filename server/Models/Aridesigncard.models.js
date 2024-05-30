const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    Name: {
        type: String,
        required: true,
    },

    ImageId: {
        type: String,
        required: true
    },

    Tittle: {
        type: String,
        required: true,
    },

    Price: {
        type: Number,
        required: true,
    },

    Type: {
        type: String,
        required: true,
    }
});

const aridesigner = mongoose.model("Aridesigner", schema);
module.exports = aridesigner;
