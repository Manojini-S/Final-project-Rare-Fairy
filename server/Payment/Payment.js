
const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_51PJFojP7PxWjIVyao6JKzdytoOcNtNOto9kDeWztApfEoOqiKqmmcvUVr3GRLzKScxb7CL0eIsr4TzIXsNFo9EBE00ldTv0LoF");
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(express.json());
app.use(cors());
const paymentServer = async () => {
app.post("/payment", (req, res) => {
    const { product, token } = req.body;
    console.log("PRODUCT", product);
    console.log("PRICE", product.price);
    const idempotencyKey = uuidv4();
    return stripe.customers.create({
        email: token.email,
        source: token.id,
    })
    .then(customer => {
        return stripe.charges.create({
            amount: product.price * 10,
            currency: "LKR",
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of ${product.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country,
                }
            }
        }, { idempotencyKey });
    })
    .then(result => res.status(200).json(result))
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Payment failed" });
    });
});
}
module.exports=paymentServer