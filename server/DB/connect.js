const Mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv').config();
const envUrl = process.env.clusterUrl
const cors = require ('cors')
const userRoutes = require('../Routes/userRoutes')
const app = express();
const Port = 3002;
app.use(express.json());


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

app.use('/user' , userRoutes)
app.post('register', (req,res) => {
    Usermodel
})


};

module.exports = connect;