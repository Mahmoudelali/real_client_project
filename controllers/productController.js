import ProductModel from '../models/productModel.js';

class product_controllers {
	// add product
	addProduct(req, res) {
		try {
			const {
				userId,
				title,
				description,
				images,
				price,
				condition,
				state,
				is_available,
				review,
				sub_category_id,
			} = req.body;

			ProductModel.create(
				userId,
				title,
				description,
				images,
				price,
				condition,
				state,
				is_available,
				review,
				sub_category_id,
			).then((product) => {
				console.log(product);
				res.status(200).json({
					message: 'Product added successfully',
					product,
				});
			});
		} catch (error) {
			console.log(error.message);
			res.status(500).json({
				message: error.message,
			});
		}
	}
	// edit product
	editProduct(req, res) {
		try {
			const product = req.params.id;
			const payload = req.body;
			ProductModel.findByIdAndUpdate(product, payload).then((product) => {
				console.log(product);
				if (product) {
					res.status(200).json({
						message: 'Product updated successfully',
						product,
					});
				} else {
					res.status(404).json({
						message: 'Product not found',
					});
				}
			});
		} catch (error) {
			res.status(404).json({ error: error.message });
		}
	}
	// get all products
	getAllProducts(req, res) {
		try {
			ProductModel.find().then((products) => {
				console.log(products);
				res.status(200).json({
					message: 'Products fetched successfully',
					products,
				});
			});
		} catch (error) {
			res.status(500).json({
				message: error.message,
			});
		}
	}
	// get single product
	getSingleProduct(req, res) {
		try {
			const product = req.params.id;
			ProductModel.findById(product).then((product) => {
				console.log(product);
				if (product) {
					res.status(200).json({
						message: 'Product fetched successfully',
						product,
					});
				} else {
					res.status(404).json({
						message: 'Product not found',
					});
				}
			});
		} catch (error) {
			res.status(500).json({
				message: error.message,
			});
		}
	}
	// delete product
	deleteProduct(req, res) {
		try {
			const product = req.params.id;
			ProductModel.findByIdAndDelete(product).then((product) => {
				console.log(product);
				if (product) {
					res.status(200).json({
						message: 'Product deleted successfully',
						product,
					});
				} else {
					res.status(404).json({
						message: 'Product not found',
					});
				}
			});
		} catch (error) {
			res.status(500).json({
				message: error.message,
			});
		}
	}
}

export default new product_controllers();
