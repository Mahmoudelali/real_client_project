import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const { Schema, model } = mongoose;

const websiteSettingSchema = new Schema(
  {
    seo: {
      type: String,
      trim: true,
    },
  },
  {
    collection: "WebsiteSetting",
  }
);
websiteSettingSchema.plugin(mongoosePaginate);

const websiteSettingModel = model("WebsiteSetting", websiteSettingSchema);
websiteSettingModel.paginate().then({});
export default websiteSettingModel;
