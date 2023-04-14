
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
			required: true,
		},
	],
	price: {
		type: Number,
		required: true,
	},
	condition: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	is_available: {
		required: true,
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
