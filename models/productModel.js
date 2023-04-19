import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
	user_id: {
		type: Schema.Types.ObjectId,
		ref: "User",
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
	image: {
		type: String,
		trim: true,
	},
	price: {
		type: Number,
	},
	condition: {
		type: String,
	},
	state: {
		type: String,
		enum: ["pending", "accepted", "rejected"],
		default: "pending",
	},
	is_available: {
		type: Boolean,
	},
	review: {
		type: String,
		default: "",
	},
	sub_category_id: {
		type: Schema.Types.ObjectId,
		ref: "SubCategory",
	},
});
ProductSchema.pre(["find", "findOne", "create", "save"], function () {
	this.populate(["sub_category_id", "user_id"]);
});
export default model("Product", ProductSchema);
