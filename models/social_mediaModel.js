import mongoose from "mongoose";
const { Schema, model } = mongoose;

const socialMediaSchema = new Schema(
  {
    whatsapp: {
      type: String,
      trim: true,
    },
    instagram: {
      type: String,
      trim: true,
    },
    facebook: {
      type: String,
      trim: true,
    },
  },
  {
    collection: "SocialMedia",
  }
);

const socialMediaModel = model("SocialMedia", socialMediaSchema);
export default socialMediaModel;
