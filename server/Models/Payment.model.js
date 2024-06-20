const Mongoose = require("mongoose");
const schema = new Mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	PaidAmount: {
		type: Number,
		required: true,
	},

	PaymentType: {
		type: String,
		required: true,
	},
    Satatus: {
		type: String,
		required: true,
          enum: ['pending', 'paid' ],
        default: 'pending'
	},
});

const payment = Mongoose.model("Payment", schema);
module.exports = payment;
