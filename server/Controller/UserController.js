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











// const express = require("express");
// const User = require("../Models/User.models");
// const bcrypt = require("bcrypt");
// const { validationResult } = require("express-validator");

// exports.getUser = (req, res) => { 
//     User.find({})
//         .then((users) => {
//             res.status(200).json(users);
//         })
//         .catch((err) => {
//             console.error("Error fetching users:", err);
//             res.status(500).json({ message: "Something went wrong while fetching users" });
//         });
// };

// exports.createUser = async (req, res) => {
//     try {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         const { UserId, Name, Email, Password } = req.body;

//         // Check if user already exists
//         let user = await User.findOne({ Email });
//         if (user) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         // Hash password
//         const hashedPassword = await bcrypt.hash(Password, 10);

//         user = new User({
//             UserId,
//             Name,
//             Email,
//             Password: hashedPassword,
//             Role: "user",
//         });

//         await user.save();

//         res.status(201).json({ message: "User created successfully" });
//     } catch (err) {
//         console.error("Error creating user:", err);
//         res.status(500).json({ message: "Something went wrong while creating user" });
//     }
// };

// exports.updateUser = async (req, res) => {
//     try {
//         const { id } = req.params;

//         // Validate request body
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         await User.findByIdAndUpdate(id, req.body);
//         const user = await User.findById(id);
//         res.status(200).json(user);
//     } catch (error) {
//         console.error("Error updating user:", error);
//         res.status(500).json({ message: "Something went wrong while updating user" });
//     }
// };

// exports.deleteUser = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await User.findByIdAndRemove(id);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         console.error("Error deleting user:", error);
//         res.status(500).json({ message: "Something went wrong while deleting user" });
//     }
// };

// exports.verifyUser = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await User.findByIdAndUpdate(id, { Verified: true }, { new: true });
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         res.status(200).json({ message: "User verified successfully", user });
//     } catch (error) {
//         console.error("Error verifying user:", error);
//         res.status(500).json({ message: "Something went wrong while verifying user" });
//     }
// };

// exports.loginUser = async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         let user = await User.findOne({ Email: username });
//         if (!user) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         const isPasswordValid = await bcrypt.compare(password, user.Password);
//         if (!isPasswordValid) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         // If credentials are valid, you can generate a JWT token and send it back to the client for authentication

//         res.status(200).json({ message: "Login successful" });
//     } catch (error) {
//         console.error("Error logging in:", error);
//         res.status(500).json({ message: "Something went wrong while logging in" });
//     }
// };

