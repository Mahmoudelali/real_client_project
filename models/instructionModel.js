import mongoose from "mongoose";
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

const instructionModel = model("Instruction", instructionSchema);
export default instructionModel;
