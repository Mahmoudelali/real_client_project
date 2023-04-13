import mongoose from "mongoose";
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

const websiteSettingModel = model("WebsiteSetting", websiteSettingSchema);
export default websiteSettingModel;
