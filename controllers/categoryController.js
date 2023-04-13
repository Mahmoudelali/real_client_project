import Category from "../models/categoryModel";

// To get all the category 
export const getAllCategory = async (req, res)=>{
    try{
        const category = new Category.find();
        res.status(200).json({message:error.message});
    } catch{
        res.status(500).json({message:error.message});
    }
};


// to add a category 

export const addCategory = async(req, res)=>{
    const {name}= req.body;
    const category= new Category({name:name});
    try{
        const newCategory= await category.save();
        res.status(201).json(newCategory);
    } catch{
        res.status(400).json({message:error.message});
    }
};




