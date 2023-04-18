import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
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
profitSchema.plugin(mongoosePaginate);

const profitModel = model("Profit", profitSchema);
profitModel.paginate().then({});
export default profitModel;
