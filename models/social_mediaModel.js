import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
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
socialMediaSchema.plugin(mongoosePaginate);

const socialMediaModel = model("SocialMedia", socialMediaSchema);
socialMediaModel.paginate().then({});
export default socialMediaModel;
