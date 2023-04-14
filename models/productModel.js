import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	images: [
		{
			typeof: Object,
		},
	],
	price: {
		type: Number,
	},
	condition: {
		type: String,
	},
	state: {
		type: String,
	},
	is_available: {
		type: Boolean,
	},
	review: {
		type: String,
		default: '',
	},
	sub_category_id: {
		type: Schema.Types.ObjectId,
		ref: 'SubCategory',
	},
});

export default model('Product', ProductSchema);
