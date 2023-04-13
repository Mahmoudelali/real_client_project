import express from 'express';
const router = express.Router();

import imageHandler from '../middleware/imagesUpload.js';

import productController from '../controllers/productController.js';

// get All products
router.get('/', productController.getAllProducts);
// get One Product
router.get('/:id', productController.getOneProduct);
// Add one product
router.post('/create', imageHandler, productController.addProduct);
// edit one product
router.put('/edit/:id', imageHandler, productController.editProduct);
// delete one product
router.delete('/delete/:id', productController.deleteProduct);

export default router;
