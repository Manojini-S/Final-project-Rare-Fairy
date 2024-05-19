// AridesigncardController.js

const Admin = require('../Models/Admin.models');

// Controller function to handle fetching Aridesigner data
exports.getAdmin = async (req, res) => {
    try {
        // Fetch Aridesigner data from the database (example)
        const aridesignerData = await Aridesigner.find();

        // Respond with the fetched Aridesigner data
        res.status(200).json(aridesignerData);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const express =require("express");
const mongoose =require("mongoose");
const Aridesign = require ("../Models/Aridesigncard.models");

const getAridesigner = (req, res) => {

    Aridesign.find({})
        .then((aridesign) => {
            res.status(200).json(aridesign);
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", err });
        });
};

const createAridesigner = (req, res) => {
    const aridesign = new Aridesign({
        AriId:req.body.AriId,
       ImageId:req.body.ImageId,
       Tittle:req.body.Tittle,
       Price:req.body.Price,
       Type:req.body.Type,
       
    })

    aridesign.save()
        .then(() => {
            res.status(201).json({ message: "User created SuceessFully" });

        })
        .catch((err) => {
            res.status(500).json({ message: "Something went to wrong", err })
        });
};

// const updateAridesign = (req, res) => {
//     const id = req.params.id;
//     const { AriId, ImageId, Tittle,Price,Type } = req.body;

// };

const deleteAridesign = (req, res) => {
    const id = req.params.id;
    Aridesign.findByIdandRemove(id, (err, Aridesign) => {
        if (err) {
            res.status(500).json({ message: "Something went to wrong" });
        } else if (!Aridesign) {
            res.status(404).json({
                message: "Use not found"
            });
        } else {
            res.staus(200).json(Aridesign)
        }
    });
};

const loginUser = (req, res) => {
    const {username} = req.params
    console.log(username)
    res.status(200).json({message:"ok"});
}


module.exports = { getAridesigner, createAridesigner,  deleteAridesign,loginUser };

