const express = require("express");
const mongoose = require("mongoose");
const User = require("../Models/User.models");

// Define your controller functions

const getUser = (req, res) => {
   
    User.find({})
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong",err });
        });
};

const createUser = (req, res) => {
    const user = new User(req.body);

    user.save()
        .then(() => {
            res.status(201).json({ message: "User created SuceessFully",err });

        })
        .catch((err) => {
            res.status(500).json({ message: "Something went to wrong" })
        });
};

const updateUser = (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    User.findByIdandRemove(id, (err, user) => {
        if (err) {
            res.status(500).json({ message: "Something went to wrong" });
        } else if (!user) {
            res.status(404).json({
                message: "Use not foun"
            });
        } else {
            res.staus (200).json(user)
        }
    });
};

module.exports = {getUser,createUser,updateUser,deleteUser};