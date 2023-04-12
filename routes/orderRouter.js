import express from 'express';
import { getAllOrders, createOrder, getOrderById, updateOrder, deleteOrder } from '../controllers/orderController.js';

const router = express.Router();

// GET /api/orders
router.get('/', getAllOrders);

// POST /api/orders
router.post('/', createOrder);

// GET /api/orders/:orderId
router.get('/:orderId', getOrderById);

// PUT /api/orders/:orderId
router.put('/:orderId', updateOrder);

// DELETE /api/orders/:orderId
router.delete('/:orderId', deleteOrder);

export default router;
