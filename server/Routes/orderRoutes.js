const express = require('express');
const router = express.Router();
const cors = require('cors');
const orderController = require('../Controller/OrderController');

// Enable CORS if required
router.use(cors());

// Define routes
router.get('/orders', orderController.getAllOrders);
router.get('/orders/:id', orderController.getOrderById);
router.post('/create', orderController.createOrder); // Changed endpoint from /create to /orders
router.put('/orders/:id', orderController.updateOrder);
router.delete('/orders/:id', orderController.deleteOrder);
router.put('/orders/:id/accept', orderController.acceptOrder);
router.put('/orders/:id/reject', orderController.rejectOrder);
 // New route for rejecting an order
router.get('/count/:status', orderController.getOrderCountByStatus); // New route for fetching order count by status
router.get('/count', orderController.getOrderCount);

module.exports = router;
