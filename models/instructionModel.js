import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const { Schema, model } = mongoose;

const instructionSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    summernote: {
      type: String,
      trim: true,
    },
  },
  {
    collection: "Instruction",
  }
);
instructionSchema.plugin(mongoosePaginate);

const instructionModel = model("Instruction", instructionSchema);
instructionModel.paginate().then({});
export default instructionModel;
