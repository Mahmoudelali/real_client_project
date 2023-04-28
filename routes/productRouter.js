import express from "express";
const router = express.Router();

import upload from "../middleware/imagesUpload.js";

import productController from "../controllers/productController.js";
import { admin, verifyUser } from "../middleware/auth.js";

// get All products
router.get("/", productController.getAllProducts);
// get One Product
router.get("/:id", productController.getSingleProduct);
// Add one product
router.post("/create", verifyUser, upload, productController.addProduct);
// edit one product
router.put("/edit/:id", verifyUser, upload, productController.editProduct);
// delete one product
router.delete("/delete/:id", verifyUser, productController.deleteProduct);

export default router;
