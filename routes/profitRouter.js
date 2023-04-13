import express from "express";
import {
  getAllProfit,
  createProfit,
  getProfitById,
  updateProfit,
  deleteProfit,
} from "../controllers/profitController.js"

const router = express.Router();

// GET /profits
router.get("/", getAllProfit);

// POST /profits
router.post("/", createProfit);

// GET /profits/:profitId
router.get("/:profitId", getProfitById);

// PUT /profits/:profitId
router.put("/:profitId", updateProfit);

// DELETE /profits/:profitId
router.delete("/:profitId", deleteProfit);

export default router;
