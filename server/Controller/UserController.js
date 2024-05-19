//usercontrollers//

const express = require("express");
// const mongoose = require("mon    goose");
const User = require("../Models/User.models");
const { updateOrder } = require("./OrderController");

const app = express()

// Define your controller functions

exports.getUser = (req, res) => { 

    User.find({})
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", err });
        });
};

exports.createUser = (req, res) => {
    console.log("ENtering Createuser function")
    const user = new User({
        UserId:req.body.UserId,
        Name: req.body.fullname,
        Email: req.body.email,
        Password: req.body.password,
        Role:"user",

})

    console.log(user)

    user.save()
    res.status(200).json({ message: "User created SuceessFully" }); 

    

    // user.save()
        // .then(() => {
        //     console.log("Entering save ")

            

        // })
        // .catch((err) => {
        //     res.status(500).json({ message: "Something went to wrong", err })
        // });
};

// const user = require('../Models/User.models'); // Ensure this model import is at the top
// const updatedUser = express()
// // Endpoint to update an item by ID
// app.put('/user/:id', async (req, res) => {
//   const { id } = req.params;
//   const { UserId, Name, Email, Password,Role } = req.body;
//   try {
//     // Find the item by ID and update it
//     const updatedUser = await User.findByIdAndUpdate(id, {
//       UserId,
//       Name,
//       Email,
//       Password,
//       Role
//     }, { new: true }); // The option { new: true } ensures that the updated document is returned
//     if (!updatedUser) {
//       return res.status(404).send('User not found');
//     }
//     res.status(200).json(updatedUser);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Error updating the User");
//   }
// });


exports.updateUserid = async (req, res) => {
    try {
      const {id} = req.params
      await User.findByIdAndUpdate(id, req.body);
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).send(error);
    }
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.findByIdandRemove(id, (err, user) => {
        if (err) {
            res.status(500).json({ message: "Something went to wrong" });
        } else if (!user) {
            res.status(404).json({
                message: "Use not found"
            });
        } else {
            res.staus(200).json(user)
        }
    });
};
exports.loginUser = (req, res) => {
    const {username} = req.params
    console.log(username)
    res.status(200).json({message:"ok"});
}


// module.exports = { getUser, createUser, deleteUser,loginUser };

