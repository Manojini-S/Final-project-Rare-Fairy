const express = require("express");
const User = require("../Models/User.models");

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
    try {
        const { id } = req.params;
        await User.findByIdAndUpdate(id, req.body);
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id, (err, user) => {
        if (err) {
            res.status(500).json({ message: "Something went wrong" });
        } else if (!user) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.status(200).json(user);
        }
    });
};

exports.verifyUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id, { Verified: true }, { new: true })
        .then((user) => {
            if (!user) {
                res.status(404).json({ message: "User not found" });
            } else {
                res.status(200).json({ message: "User verified successfully", user });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", err });
        });
};

exports.loginUser = (req, res) => {
    const { username } = req.params;
    console.log(username);
    res.status(200).json({ message: "OK" });
};

