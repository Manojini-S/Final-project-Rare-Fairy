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




module.exports = { getPayment, createPayment, deletePayment };


import asynchandler from 'express-async-handler';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.processPayment  = asynchandler(async(req, res, next) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "Rs",
        description: "TEST PAYMENT",
        metadata: { integration_check: "accept_payment"},
        shipping: req.body.shipping
    })

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    })
})

exports.sendStripeApi  = asynchandler(async(req, res, next) => {
    res.status(200).json({
        stripeApiKey: process.env.STRIPE_API_KEY
    })
})