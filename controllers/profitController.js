import Profit from "../models/profitModel.js";

// Get all profits
export const getAllProfit = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(limit, 10) || 10,
    };
    const profits = await Profit.paginate({}, options);
    res.status(200).json(profits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new profit
export const createProfit = async (req, res) => {
  const profit = new Profit(req.body);

  try {
    const newProfit = await profit.save();
    res.status(201).json(newProfit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single profit by ID
export const getProfitById = async (req, res) => {
  try {
    const profit = await Profit.findById(req.params.profitId);
    if (!profit) {
      return res.status(404).json({ message: "Profit not found" });
    }
    res.status(200).json(profit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a profit
export const updateProfit = async (req, res) => {
  try {
    const profit = await Profit.findById(req.params.profitId);
    if (!profit) {
      return res.status(404).json({ message: "Profit not found" });
    }
    Object.assign(profit, req.body);
    const updatedprofit = await profit.save();
    res.status(200).json(updatedprofit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a profit
export const deleteProfit = async (req, res) => {
  try {
    const profit = await Profit.findByIdAndRemove(req.params.profitId);
    if (!profit) {
      return res.status(404).json({ message: "Profit not found" });
    }
    res.status(200).json({ message: "Profit deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
