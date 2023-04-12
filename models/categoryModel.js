import mongoose from "mongoose";

const {Schema, model}= mongoose;
const categorySchema= new Schema(
    {
        name:{
            type:String,
            require:true,
        },
    },
    {
        collation: "Category",
    }
);

const Category= model("Category", categorySchema);
export default Category;