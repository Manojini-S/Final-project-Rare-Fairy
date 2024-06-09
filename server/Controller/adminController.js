const express = require("express");
const router = express.Router();
const Admin = require('../Models/Admin.models');

// Create a new admin entry
router.post('/', async (req, res) => {
    const { Producttype, Price, Payment, Status } = req.body;

    try {
        const newAdmin = new Admin({
            Producttype,
            Price,
            Payment,
            Status
        });

        await newAdmin.save();
        res.status(201).json({ message: 'Admin entry created successfully', data: newAdmin });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all admin entries
router.get('/', async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get a single admin entry by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const admin = await Admin.findById(id);
        if (!admin) {
            return res.status(404).json({ error: 'Admin entry not found' });
        }
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Update an admin entry by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { Producttype, Price, Payment, Status } = req.body;

    try {
        const admin = await Admin.findById(id);
        if (!admin) {
            return res.status(404).json({ error: 'Admin entry not found' });
        }

        admin.Producttype = Producttype || admin.Producttype;
        admin.Price = Price || admin.Price;
        admin.Payment = Payment || admin.Payment;
        admin.Status = Status || admin.Status;

        await admin.save();
        res.status(200).json({ message: 'Admin entry updated successfully', data: admin });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete an admin entry by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const admin = await Admin.findById(id);
        if (!admin) {
            return res.status(404).json({ error: 'Admin entry not found' });
        }

        await admin.remove();
        res.status(200).json({ message: 'Admin entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
