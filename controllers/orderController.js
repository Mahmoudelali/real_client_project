import Order from '../models/orderModel.js';

// GET /orders
export const getAllOrders = async (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// POST /orders
export const createOrder = async (req, res) => {
sssssssssssssssssssss
  const { user_id, product_id, state, address, message, total } = req.body;
  const order = new Order({
    user_id,
    product_id,
    state,
    address,
    message,
    total,
  });


	try {
		const newOrder = await order.save();
		res.status(201).json(newOrder);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// GET /orders/:orderId
export const getOrderById = async (req, res) => {
	try {
		const order = await Order.findById(req.params.orderId);
		if (!order) {
			return res.status(404).json({ message: 'Order not found' });
		}
		res.status(200).json(order);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// PUT /orders/:orderId
export const updateOrder = async (req, res) => {
	try {
		const order = await Order.findById(req.params.orderId);
		if (!order) {
			return res.status(404).json({ message: 'Order not found' });
		}

		order.user_id = req.body.user_id || order.user_id;
		order.product_id = req.body.product_id || order.product_id;
		order.state = req.body.state || order.state;
		order.date = req.body.date || order.date;
		order.address = req.body.address || order.address;
		order.message = req.body.message || order.message;
		order.total = req.body.total || order.total;

		const updatedOrder = await order.save();
		res.status(200).json(updatedOrder);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// DELETE /orders/:orderId
export const deleteOrder = async (req, res) => {
	try {
		const order = await Order.findById(req.params.orderId);
		if (!order) {
			return res.status(404).json({ message: 'Order not found' });
		}
		await order.remove();
		res.status(200).json({ message: 'Order deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
