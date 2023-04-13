import express from "express";
import {
  getAllSocialMedia,
  createSocialMedia,
  getSocialMediaById,
  updateSocialMedia,
  deleteSocialMedia,
} from "../controllers/social_mediaController.js"

const router = express.Router();

// GET /orders
router.get("/", getAllSocialMedia);

// POST /orders
router.post("/", createSocialMedia);

// GET /orders/:orderId
router.get("/:socialMediaId", getSocialMediaById);

// PUT /orders/:orderId
router.put("/:socialMediaId", updateSocialMedia);

// DELETE /orders/:orderId
router.delete("/:socialMediaId", deleteSocialMedia);

export default router;
