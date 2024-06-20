const Order = require('../Models/Order.models');

const OrderController = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ error: "Failed to fetch orders. Please try again later." });
    }
  },

  getOrderById: async (req, res) => {
    const { id } = req.params;
    try {
      const order = await Order.findById(id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(200).json(order);
    } catch (error) {
      console.error("Error fetching order by ID:", error);
      res.status(500).json({ error: "Failed to fetch order. Please try again later." });
    }
  },

  createOrder: async (req, res) => {
    const { name, email, contactNumber, address, deadline } = req.body;
    try {
      const newOrder = new Order({
        name,
        email,
        contactNumber,
        address,
        deadline,
      });
      await newOrder.save();
      res.status(201).json(newOrder);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Failed to create order. Please try again later." });
    }
  },

  updateOrder: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const updatedOrder = await Order.findByIdAndUpdate(id, { status }, { new: true });
      if (!updatedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(200).json(updatedOrder);
    } catch (error) {
      console.error("Error updating order:", error);
      res.status(500).json({ error: "Failed to update order. Please try again later." });
    }
  },

  deleteOrder: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedOrder = await Order.findByIdAndDelete(id);
      if (!deletedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      console.error("Error deleting order:", error);
      res.status(500).json({ error: "Failed to delete order. Please try again later." });
    }
  },

   acceptOrder : async (req, res) => {
    const { id } = req.params;
    try {
      const updatedOrder = await Order.findByIdAndUpdate(id, { status: 'accepted' }, { new: true });
      if (!updatedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(200).json(updatedOrder);
    } catch (error) {
      console.error("Error accepting order:", error);
      res.status(500).json({ error: "Failed to accept order. Please try again later." });
    }
  },
  
   rejectOrder : async (req, res) => {
    const { id } = req.params;
    try {
      const updatedOrder = await Order.findByIdAndUpdate(id, { status: 'rejected' }, { new: true });
      if (!updatedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(200).json(updatedOrder);
    } catch (error) {
      console.error("Error rejecting order:", error);
      res.status(500).json({ error: "Failed to reject order. Please try again later." });
    }
  },
  

  getOrderCountByStatus: async (req, res) => {
    const { status } = req.params;
    try {
      const orderCount = await Order.countDocuments({ status });
      res.status(200).json({ count: orderCount });
    } catch (error) {
      console.error(`Error fetching ${status} order count:`, error);
      res.status(500).json({ error: `Failed to fetch ${status} order count. Please try again later.` });
    }
  },

  getOrderCount: async (req, res) => {
    try {
      const orderCount = await Order.countDocuments();
      res.status(200).json({ count: orderCount });
    } catch (error) {
      console.error("Error fetching order count:", error);
      res.status(500).json({ error: "Failed to fetch order count. Please try again later." });
    }
  },
};

module.exports = OrderController;
