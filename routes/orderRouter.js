import express from "express";
import {
  getAllOrders,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import { admin, verifyUser } from "../middleware/auth.js";

const router = express.Router();

// GET /orders
router.get("/", verifyUser, admin, getAllOrders);

// POST /orders
router.post("/", verifyUser, createOrder);

// GET /orders/:orderId
router.get("/:orderId", verifyUser, getOrderById);

// PUT /orders/:orderId
router.put("/:orderId", verifyUser, updateOrder);

// DELETE /orders/:orderId
router.delete("/:orderId", verifyUser, deleteOrder);

export default router;
