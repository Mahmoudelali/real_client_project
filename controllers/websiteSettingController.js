import WebsiteSetting from "../models/websiteSettingModel.js";

// Get all website setting
export const getAllWebsiteSetting = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(limit, 10) || 10,
    };
    const websiteSetting = await WebsiteSetting.paginate({}, options);
    res.status(200).json(websiteSetting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new website setting
export const createWebsiteSetting = async (req, res) => {
  const websiteSetting = new WebsiteSetting(req.body);

  try {
    const newWebsiteSetting = await websiteSetting.save();
    res.status(201).json(newWebsiteSetting);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single website setting by ID
export const getWebsiteSettingById = async (req, res) => {
  try {
    const websiteSetting = await WebsiteSetting.findById(
      req.params.websiteSettingId
    );
    if (!websiteSetting) {
      return res.status(404).json({ message: "Website setting not found" });
    }
    res.status(200).json(websiteSetting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a website setting
export const updateWebsiteSetting = async (req, res) => {
  try {
    const websiteSetting = await WebsiteSetting.findById(
      req.params.websiteSettingId
    );
    if (!websiteSetting) {
      return res.status(404).json({ message: "Social media entry not found" });
    }
    Object.assign(websiteSetting, req.body);
    const updatedWebsiteSetting = await websiteSetting.save();
    res.status(200).json(updatedWebsiteSetting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a website setting
export const deleteWebsiteSetting = async (req, res) => {
  try {
    const websiteSetting = await WebsiteSetting.findByIdAndRemove(
      req.params.websiteSettingId
    );
    if (!websiteSetting) {
      return res.status(404).json({ message: "Website setting not found" });
    }
    res.status(200).json({ message: "Website setting deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
