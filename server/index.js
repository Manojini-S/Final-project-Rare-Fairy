const express = require("express");
const mongoose = require ('mongoose');
const cors = require ("cors");
const userRoutes = require("./Routes/userRoutes");
const orderRoutes = require("./Routes/orderRoutes");
const reviewRoutes=require("./Routes/reviewRoutes");
const app= express()
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const connect = require('./DB/connect');
connect();
// app.use(cors)
// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:3000' 
// })); 

app.use(
    cors({
      origin: ["http://localhost:3000","https://psd-1.onrender.com"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );



app.use(express.json);

app.use('/user' , userRoutes)

