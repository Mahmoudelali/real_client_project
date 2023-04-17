import Instruction from "../models/instructionModel.js"

// Get all instructions
export const getAllInstruction = async (req, res) => {
  try {
    const instruction = await Instruction.find();
    res.status(200).json(instruction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new instruction
export const createInstruction = async (req, res) => {
  const instruction = new Instruction(req.body);

  try {
    const newInstruction = await instruction.save();
    res.status(201).json(newInstruction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single instruction by ID
export const getInstructionById = async (req, res) => {
  try {
    const instruction= await Instruction.findById(req.params.instructionId);
    if (!instruction) {
      return res.status(404).json({ message: "Instruction not found" });
    }
    res.status(200).json(instruction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an instruction
export const updateInstruction = async (req, res) => {
  try {
    const instruction = await Instruction.findById(req.params.instructionId);
    if (!instruction) {
      return res.status(404).json({ message: "Instruction not found" });
    }
    Object.assign(instruction, req.body);
    const updatedinstruction = await instruction.save();
    res.status(200).json(updatedinstruction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an instruction
export const deleteInstruction = async (req, res) => {
  try {
    const instruction = await Instruction.findByIdAndRemove(
      req.params.instructionId
    );
    if (!instruction) {
      return res.status(404).json({ message: "Instruction not found" });
    }
    res
      .status(200)
      .json({ message: "Instruction deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
