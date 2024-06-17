const Order = require('../Models/Order.models');

const OrderController = {
  // Get all orders
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ error: "Failed to fetch orders. Please try again later." });
    }
  },

  // Get a single order by ID
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

  // Create a new order
  createOrder: async (req, res) => {
    const { name, email, contactNumber, address, deadline } = req.body;
    try {
      const newOrder = new Order({
        name: name,
        email: email,
        contactNumber: contactNumber,
        address: address,
        deadline: deadline,
      });
      await newOrder.save();
      res.status(201).json(newOrder);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Failed to create order. Please try again later." });
    }
  },

  // Update an order by ID
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

  // Delete an order by ID
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

  // Update order status (example: accept/reject order)
  updateOrderStatus: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const updatedOrder = await Order.findByIdAndUpdate(id, { status }, { new: true });
      if (!updatedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }

      // Example: sending email notification
      // Replace with your actual email sending logic
      const emailSent = await sendEmailNotification(updatedOrder, status);
      if (!emailSent) {
        console.error("Failed to send email notification");
      }

      res.status(200).json(updatedOrder);
    } catch (error) {
      console.error("Error updating order status:", error);
      res.status(500).json({ error: "Failed to update order status. Please try again later." });
    }
  },

  // Get order count by status
  getOrderCountByStatus: async (req, res) => {
    const { status } = req.params;
    try {
      const orderCount = await Order.countDocuments({ status: status });
      res.status(200).json({ count: orderCount });
    } catch (error) {
      console.error(`Error fetching ${status} order count:`, error);
      res.status(500).json({ error: `Failed to fetch ${status} order count. Please try again later.` });
    }
  },

  // Other controller methods...

};

// Example function to send email notification
async function sendEmailNotification(order, status) {
  // Replace with your actual email sending logic
  try {
    const message = status === 'accepted'
      ? `Dear ${order.name},\n\nYour order has been accepted.\n\nThank you.`
      : `Dear ${order.name},\n\nWe regret to inform you that your order has been rejected.\n\nThank you.`;

    // Example: sending email using a hypothetical email service
    // Replace this with your actual email service integration
    console.log("Sending email to:", order.email);
    // Simulating email sending delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Email sent successfully");

    return true;
  } catch (error) {
    console.error("Error sending email notification:", error);
    return false;
  }
}

module.exports = OrderController;
