import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderSchema = new Schema(
  {
    // user_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    // product_id: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Product",
    //   },
    // ],
    state: {
      type: String,
      enum: [
        "created",
        "pending",
        "processing",
        "shipped",
        "delivered",
        "cancelled",
      ],
      default: "created",
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "Order",
  }
);
// orderSchema.pre(["find", "findOne", "save", "create"], function () {
//   this.populate(["user_id", "product_id"]);
// });
const orderModel = model("Order", orderSchema);
export default orderModel;
