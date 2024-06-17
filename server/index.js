const express = require("express");
const cors = require ("cors");

const app= express()
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const connect = require('./DB/connect');
connect();

app.use(
    cors({
      origin: ["http://localhost:3000","https://psd-1.onrender.com"],
      methods: ["GET", "POST", "PUT", "DELETE",],
      credentials: true,
    })
  );



app.use(express.json());
