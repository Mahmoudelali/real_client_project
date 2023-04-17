import express from "express";
import {
  getAllInstruction,
  createInstruction,
  getInstructionById,
  updateInstruction,
  deleteInstruction,
} from "../controllers/instructionController.js"

const router = express.Router();

// GET /Instructions
router.get("/", getAllInstruction);

// POST /Instructions
router.post("/", createInstruction);

// GET /Instructions/:InstructionId
router.get("/:instructionId", getInstructionById);

// PUT /Instructions/:InstructionId
router.put("/:instructionId", updateInstruction);

// DELETE /Instructions/:InstructionId
router.delete("/:instructionId", deleteInstruction);

export default router;
