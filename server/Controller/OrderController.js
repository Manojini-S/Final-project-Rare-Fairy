const express =require("express");
const mongoose =require("mongoose");
const Order = require ("../Models/Order.models");

const getOrder = (req, res) => {

    Order.find({})
        .then((order) => {
            res.status(200).json(order);
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", err });
        });
};

const createOrder = (req, res) => {
    const order = new Order({
        OrderId:req.body.OrderId,
       AriId:req.body.AriId,
       OrderBy:req.body.OrderBy,
       PaymentId:req.body.PaymentId,
       DeadLine:req.body.DeadLine,
       
    })

    order.save()
        .then(() => {
            res.status(201).json({ message: "User created SuceessFully" });

        })
        .catch((err) => {
            res.status(500).json({ message: "Something went to wrong", err })
        });
};

// const updateOrder = (req, res) => {
//     const id = req.params.id;
//     const { OrderId,AriId,OrderBy,PaymentId,DeadLine  } = req.body;

// };

const deleteOrder = (req, res) => {
    const id = req.params.id;
    Order.findByIdandRemove(id, (err, order) => {
        if (err) {
            res.status(500).json({ message: "Something went to wrong" });
        } else if (!order) {
            res.status(404).json({
                message: "Use not found"
            });
        } else {
            res.staus(200).json(order)
        }
    });
};

// const loginUser = (req, res) => {
//     const {username} = req.params
//     console.log(username)
//     res.status(200).json({message:"ok"});
// }


module.exports = { getOrder, createOrder,  deleteOrder, };