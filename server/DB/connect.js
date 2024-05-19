const Mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv').config();
const envUrl = process.env.clusterUrl;
const cors = require('cors');
const userRoutes = require('../Routes/userRoutes');
const orderRoutes = require('../Routes/orderRoutes');
const Aridesigner = require('../Routes/aridesignercardRoutes');
const reviewRoutes = require('../Routes/reviewRoutes');
const paymentRoutes = require('../Routes/paymentRoutes');
const LoginRoutes = require('../Routes/LoginRoutes');
const bodyParser = require("body-parser");


const app = express();
const Port = 3003;

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000' 
})); 
app.use(bodyParser.json());



// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     next();
// });

app.use(express.json());


function connect() {
    Mongoose.connect(envUrl)
    .then(() => {
        console.log("You are connected");
        app.listen(Port, () => {
            console.log(`Server is running on the port ${Port}`);
        });
    })
    .catch((err) => {
        console.log("Something went wrong", err);
    });


    app.use('/user', userRoutes);
    app.use('/order', orderRoutes);
    app.use('/Aridesigner', Aridesigner);
    app.use('/review', reviewRoutes);
    app.use('/payment', paymentRoutes);
    app.use('/usercreate', LoginRoutes);

  
    // app.post('/register', (req, res) => {
    // });
}

module.exports = connect;
