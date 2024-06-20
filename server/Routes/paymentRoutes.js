// module.exports = router;
const express = require('express');
const router = express.Router();
const { getPayment, createPayment, deletePayment } = require('../Controller/PaymentController');

// GET all payments
router.get('/payment', getPayment);

// POST create a new payment
router.post('/payments', createPayment);

// DELETE delete a payment by ID
router.delete('/payments/:id', deletePayment);

module.exports = router;
