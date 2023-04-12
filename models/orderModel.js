import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      product_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      }],
      state: {
        type: String,
        enum: ['created', 'pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'created'
      },
      date: {
        type: Date,
        default: Date.now
      },
      address: {
        type: String,
        required: true
      },
      message: {
        type: String
      },
      total: {
        type: Number,
        required: true
      }
    });
  const orderModel = model('Order', orderSchema);
  export default orderModel;