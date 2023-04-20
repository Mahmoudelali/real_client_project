import SocialMedia from "../models/socialMediaModel.js";

// Get all social media entries
export const getAllSocialMedia = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(limit, 10) || 10,
    };
    const socialMedia = await SocialMedia.paginate({}, options);
    res.status(200).json(socialMedia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new social media entry
export const createSocialMedia = async (req, res) => {
  const socialMedia = new SocialMedia(req.body);

  try {
    const newSocialMedia = await socialMedia.save();
    res.status(201).json(newSocialMedia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single social media entry by ID
export const getSocialMediaById = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findById(req.params.socialMediaId);
    if (!socialMedia) {
      return res.status(404).json({ message: "Social media entry not found" });
    }
    res.status(200).json(socialMedia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a social media entry
export const updateSocialMedia = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findById(req.params.socialMediaId);
    if (!socialMedia) {
      return res.status(404).json({ message: "Social media entry not found" });
    }
    Object.assign(socialMedia, req.body);
    const updatedSocialMedia = await socialMedia.save();
    res.status(200).json(updatedSocialMedia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a social media entry
export const deleteSocialMedia = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findByIdAndRemove(
      req.params.socialMediaId
    );
    if (!socialMedia) {
      return res.status(404).json({ message: "Social media entry not found" });
    }
    res
      .status(200)
      .json({ message: "Social media entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
