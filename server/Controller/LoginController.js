const express = require("express");
const mongoose = require("mongoose");
const User = require('../Models/User.models')

const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const bcrypt = require('bcryptjs');
const { use } = require("../Routes/LoginRoutes");




const signup =  async(req,res)=>{
    

    try{
        const{UserId, Name,Email,Password,Role} = req.body;
        const emailExist = await User.findOne({ Email }) ;
        if(emailExist) {
            return res.status(400).json({ error: " Email already Exists"});
        }
    const passwordHash = await bcrypt.hash(Password, 10);
    const newUser = new User({UserId,Name,Email,Password:passwordHash,Role})
    
    const saveUser = await newUser.save();

    res.status(201).json(saveUser);
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


const loginUpdate = async (req,res) => {
    const { email, password } = req.body;
    const user = await User.findOne({Email:email})
    console.log(user)
    return res.status(200).json(user)
    

}
 

const login = async (req, res, next) => {
    const { email, password } = req.body;
    // req.body = JSON.stringify(email,password);

  
    try {
        // const email = "jaanu12@mail.com"
    //   const user = await User.findOne({ email });
        console.log(email,password)
        const user = await User.findOne({email})
        console.log(user)
  
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      const match = await bcrypt.compare(password, user.Password);
      if (match) {
        const token = jwt.sign({ Email: user.Email }, process.env.JWT, { expiresIn: '1h' }); // Use a secret key from your environment variables
        res.header('Token', token).send({ token, Role: user.Role }); // Send the token and user role back to the client
      } else {
        res.status(401).send('Invalid credentials');
      }
    } catch (error) {
      next(error);
    }
  };

module.exports = {signup,login,loginUpdate}

