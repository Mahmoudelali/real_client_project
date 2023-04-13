import mongoose from "mongoose";
const { Schema, model } = mongoose;
const subCategorySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    collection: "SubCategory",
  }
);

subCategorySchema.pre(["find", "findOne", "save", "create"], function () {
  this.populate(["category_id"]);
});

const subCategory = model("SubCategory", subCategorySchema);
export default subCategory;
