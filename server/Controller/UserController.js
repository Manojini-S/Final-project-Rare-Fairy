const express = require("express");
//const User = require("../Models/User.models");
 
const User = require('../Models/User.models');

exports.getUser = (req, res) => { 
    User.find({})
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", err });
        });
};



exports.getUserCount = (req, res) => {
    User.countDocuments({})
        .then((count) => {
            res.status(200).json({ count });
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", err });
        });
};

exports.createUser = (req, res) => {
    const user = new User({
        UserId: req.body.UserId,
        Name: req.body.fullname,
        Email: req.body.email,
        Password: req.body.password,
        Role: "user",
    });

    user.save()
        .then(() => {
            res.status(200).json({ message: "User created successfully" });
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", err });
        });
};


exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const updates = req.body;

    try {
        const user = await User.findByIdAndUpdate(userId, updates, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).json({ message: 'User deleted successfully' });
        })
        .catch((err) => {
            res.status(500).json({ message: 'Failed to delete user', error: err });
        });
};



 
 
 

exports.loginUser = (req, res) => {
    const { username } = req.params;
    console.log(username);
    res.status(200).json({ message: "OK" });
};









