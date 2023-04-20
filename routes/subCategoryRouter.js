import express from "express";
import {
  getAllsubCategory,
  addsubCategory,
  getsubCategoryById,
  updatesubCategoById,
  deletesubCategory,
} from "../controllers/subCategoryController.js";

const router = express.Router();

// get subCatego
router.get("/", getAllsubCategory);

// add subcategory
router.post("/", addsubCategory);

// get subcategory by id
router.get("/:subcategoryId", getsubCategoryById);

// update subcategory by id
router.put("/:subcategoryId", updatesubCategoById);

//delete subcategory
router.delete("/:subcategoryId", deletesubCategory);

export default router;
