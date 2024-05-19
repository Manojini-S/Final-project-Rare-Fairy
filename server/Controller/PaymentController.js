const expres = require("express");
const mongoose = require ("mongoose");
const Payment = require ("../Models/Payment.model");

const getPayment = (req, res) => {

    Payment.find({})
        .then((payment) => {
            res.status(200).json(payment);
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", err });
        });
};

const createPayment = (req, res) => {
    const payment = new Payment({
        PaymentId:req.body.PaymentId,
        PaidAmount:req.body.PaidAmount,
        PaidBy:req.body.PaidBy,
        OrderId:req.body.OrderId,
        PaymentType:req.body.PaymentType,
     
       
    });

    payment.save()
        .then(() => {
            res.status(201).json({ message: "User created SuceessFully" });

        })
        .catch((err) => {
            res.status(500).json({ message: "Something went to wrong", err })
        });
};

// const updatePayment = (req, res) => {
//     const id = req.params.id;
//     const { PaymentId,PaidAmount,PaidBy,OrderId,PaymentType } = req.body;

// };

const deletePayment = (req, res) => {
    const id = req.params.id;
    Payment.findByIdandRemove(id, (err, payment) => {
        if (err) {
            res.status(500).json({ message: "Something went to wrong" });
        } else if (!payment) {
            res.status(404).json({
                message: "Use not found"
            });
        } else {
            res.staus(200).json(user)
        }
    });
};

// const loginUser = (req, res) => {
//     const {username} = req.params
//     console.log(username)
//     res.status(200).json({message:"ok"});
// }


module.exports = { getPayment, createPayment, deletePayment };