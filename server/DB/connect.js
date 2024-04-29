const Mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const envUrl = process.env.clusterUrl
const userRoutes = require('../Routes/userRoutes')
const app = express();
const Port = 3002;
app.use(express.json());
app.use('/user' , userRoutes)

function connect(){
    Mongoose.connect(envUrl)
    .then(() => 
    console.log("You are connected")
)
.catch ((err) => {
    console.log("Something went wrong",err)
})
app.listen(Port, ()=>{
    console.log(`Server is running on the port ${Port}`)
})

};

module.exports = connect;