const express = require('express');
const router = express.Router();
const adminController = require('../Controller/adminController');

// Create a new admin entry
router.post('/', adminController.createAdmin);

// Get all admin entries
router.get('/', adminController.getAllAdmins);

// Get a single admin entry by ID
router.get('/:id', adminController.getAdminById);

// Update an admin entry by ID
router.put('/:id', adminController.updateAdmin);

// Delete an admin entry by ID
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
