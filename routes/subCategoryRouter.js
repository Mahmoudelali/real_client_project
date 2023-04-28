import express from "express";
import {
  getAllsubCategory,
  addsubCategory,
  getsubCategoryById,
  updatesubCategoById,
  deletesubCategory,
} from "../controllers/subCategoryController.js";
import { admin, verifyUser } from "../middleware/auth.js";

const router = express.Router();

// get subCatego
router.get("/", getAllsubCategory);

// add subcategory
router.post("/", verifyUser, admin, addsubCategory);

// get subcategory by id
router.get("/:subcategoryId", getsubCategoryById);

// update subcategory by id
router.put("/:subcategoryId", verifyUser, admin, updatesubCategoById);

//delete subcategory
router.delete("/:subcategoryId", verifyUser, admin, deletesubCategory);

export default router;
