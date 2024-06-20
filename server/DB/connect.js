const Mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const envUrl = process.env.clusterUrl;
const cors = require('cors');
const bodyParser = require("body-parser");


// Rotues
const userRoutes = require('../Routes/userRoutes');
const orderRoutes = require('../Routes/orderRoutes');
const Aridesigner = require('../Routes/aridesignercardRoutes');
const reviewRoutes = require('../Routes/reviewRoutes');
const paymentRoutes = require('../Routes/paymentRoutes');
const LoginRoutes = require('../Routes/LoginRoutes');
const adminRoutes = require('../Routes/adminRoutes');
const imageRoutes = require('../Routes/imageRoutes')
const {upload} = require('../utils/multer.config')




const app = express();
const Port = 3003;


app.use(express.json());
app.use(bodyParser.json());

app.use(cors()); 
const corsOptions = {
    origin: ["http://localhost:3000","https://psd-1.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  };
  app.use(cors(corsOptions));

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

    app.use(express.json());
    app.use(express.json({ limit: "50mb" }));
    app.use(bodyParser.json({ limit: "50mb" }));


    

    app.use('/user', userRoutes);
    app.use('/order', orderRoutes);
    app.use('/Aridesigner', Aridesigner);
    app.use('/review', reviewRoutes);
    app.use('/payment', paymentRoutes);
    app.use('/usercreate', LoginRoutes);
    app.use('/admin', adminRoutes);
    app.use('/image', imageRoutes )
    
    
   
    

  
    // app.post('/register', (req, res) => {
    // });
}

module.exports = connect;




