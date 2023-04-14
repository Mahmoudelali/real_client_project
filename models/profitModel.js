import mongoose from "mongoose";
const { Schema, model } = mongoose;

const profitSchema = new Schema(
  {
    value: {
      type: Number,
      trim: true,
    },
  },
  {
    collection: "Profit",
  }
);

const profitModel = model("Profit", profitSchema);
export default profitModel;
