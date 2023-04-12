import mongoose from "mongoose";
const {Schema, model}= mongoose;
const SubCategorySchema =new Schema(
    {
        name:{
            type:String,
            require:true,
        },
        category_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category",
        },
    },
    {
        collection:"SubCategory",
    },
);

const subCategory = model("subCategory", SubCategorySchema);
export default subCategory;