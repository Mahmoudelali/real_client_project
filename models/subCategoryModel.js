import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

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

subCategorySchema.plugin(mongoosePaginate);

const subCategory = model("SubCategory", subCategorySchema);
export default subCategory;
