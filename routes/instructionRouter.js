import express from "express";
import {
  getAllInstruction,
  createInstruction,
  getInstructionById,
  updateInstruction,
  deleteInstruction,
} from "../controllers/instructionController.js";
import { admin, verifyUser } from "../middleware/auth.js";

const router = express.Router();

// GET /Instructions
router.get("/", getAllInstruction);

// POST /Instructions
router.post("/", verifyUser, admin, createInstruction);

// GET /Instructions/:InstructionId
router.get("/:instructionId", getInstructionById);

// PUT /Instructions/:InstructionId
router.put("/:instructionId", verifyUser, admin, updateInstruction);

// DELETE /Instructions/:InstructionId
router.delete("/:instructionId", verifyUser, admin, deleteInstruction);

export default router;
