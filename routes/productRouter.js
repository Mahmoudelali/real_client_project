import express from "express";
const router = express.Router();

import upload from "../middleware/imagesUpload.js";

import productController from "../controllers/productController.js";

// get All products
router.get("/", productController.getAllProducts);
// get One Product
router.get("/:id", productController.getSingleProduct);
// Add one product
router.post("/create", upload, productController.addProduct);
// edit one product
router.put("/edit/:id", upload, productController.editProduct);
// delete one product
router.delete("/delete/:id", productController.deleteProduct);

export default router;
