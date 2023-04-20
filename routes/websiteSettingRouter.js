import express from "express";
import {
  getAllWebsiteSetting,
  createWebsiteSetting,
  getWebsiteSettingById,
  updateWebsiteSetting,
  deleteWebsiteSetting,
} from "../controllers/websiteSettingController.js";

const router = express.Router();

// GET /websiteSetting
router.get("/", getAllWebsiteSetting);

// POST /websiteSetting
router.post("/", createWebsiteSetting);

// GET /websiteSetting/:websiteSettingId
router.get("/:websiteSettingId", getWebsiteSettingById);

// PUT /websiteSetting/:websiteSettingId
router.put("/:websiteSettingId", updateWebsiteSetting);

// DELETE /websiteSetting/:websiteSettingId
router.delete("/:websiteSettingId", deleteWebsiteSetting);

export default router;
