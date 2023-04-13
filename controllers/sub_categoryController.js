import subCategory from "../models/sub_categoryModel.js";

// get all the subCatego

export const getAllsubCategory = async (req, res)=>{
    try{
        const subcategories = await subCategory.find();
        res.status(200).json(subcategories);
    } catch(error){
        res.status(500).json({message:error.message});
    }
};

// to add a subCatego

export const addsubCategory = async(req, res)=>{
    const {name, category_id}= req.body;
    const subcategory= new subCategory({name:name, category_id:category_id});
    try{
        const newCategory= await subcategory.save();
        res.status(201).json(newCategory);
    } catch(error){
        res.status(400).json({message:error.message});
    }
};

// to get subCatego by Id

export const getsubCategoryById = async (req, res)=>{
    try{
        const subcategories= await subCategory.findById(req.params.subcategoryId);
        if(!subcategories){
            return res.status(404).json({message: 'SubCategory Not Found'});
        }
        res.status(200).json(subcategories);
    } catch(error){
        res.status(500).json({message:error.message});
    }
};

//to edit subCatego by Id

export const updatesubCategoById = async (req, res)=>{
    try{
        const subcategory = await subCategory.findById(req.params.subcategoryId);
        if (!subcategory){
            return res.status(404).json({message:"Category Not Found"});
        }
        subcategory.name= req.body.name || subcategory.name;
        console.log(subcategory);
        const updated = await subcategory.save();
        res.status(200).json(updated);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

//delete subCatego by Id

export const deletesubCategory = async (req, res)=>{
    try{
        const subcategory = await subCategory.findByIdAndRemove(req.params.subcategoryId);
        if(!subcategory){
           return res.status(404).json({message:"Category Not Found"});
        }
        res.status(200).json({ message: "Category Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
