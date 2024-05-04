const express = require("express");
const mongoose = require ('mongoose')
const cors = require ("cors")
const userRoutes = require("./Routes/userRoutes")
const app= express()
const connect = require('./DB/connect');
connect();


app.use('/user' , userRoutes)
