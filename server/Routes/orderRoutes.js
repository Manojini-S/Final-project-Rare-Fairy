const express = require('express');
const router = express.Router();
const cors = require('cors'); // Ensure CORS middleware is properly configured if needed
const orderController = require('../Controller/OrderController');

// Enable CORS if required
router.use(cors());

// Define routes
router.get('/orders', orderController.getAllOrders);
router.get('/orders/:id', orderController.getOrderById);
router.post('/create', orderController.createOrder);
router.put('/orders/:id', orderController.updateOrder);
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;
