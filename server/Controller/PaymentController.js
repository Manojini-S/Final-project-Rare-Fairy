const Payment = require("../Models/Payment.model");

const getPayment = async (req, res) => {
    try {
        const payments = await Payment.find({});
        res.status(200).json({ success: true, data: payments });
    } catch (err) {
        res.status(500).json({ success: false, error: "Something went wrong", err });
    }
};

const createPayment = async (req, res) => {
    const { PaymentId, PaidAmount, PaidBy, OrderId, PaymentType } = req.body;

    try {
        const payment = new Payment({
            PaymentId,
            PaidAmount,
            PaidBy,
            OrderId,
            PaymentType
        });

        await payment.save();
        res.status(201).json({ success: true, message: "Payment created successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create payment", err });
    }
};

const deletePayment = async (req, res) => {
    const id = req.params.id;

    try {
        const payment = await Payment.findByIdAndRemove(id);
        if (!payment) {
            return res.status(404).json({ success: false, message: "Payment not found" });
        }
        res.status(200).json({ success: true, message: "Payment deleted successfully", data: payment });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete payment", err });
    }
};

module.exports = { getPayment, createPayment, deletePayment };
