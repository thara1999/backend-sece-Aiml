// const Product=require('../models/product')

// exports.createproduct=async (req,res)=>{
//           try{
//               const product=await Product.create(req.body);
//            res.json(product);
//            res.status(200);
//           }

//           catch(err){                                                                                                                                                                                                                                                                                                                               
//             res.status(500).json({err: err.message});
//           }
// }

// exports.getproducts=async(req,res)=>{
//           try{
//                     const products= await Product.find({})
//                     res.json(products)
//                     res.status(200)
//           }
//           catch(error){
//                     res.status(400).json({error: error.message})

//           }
// }
const Product = require('../models/product');


exports.createproduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getproducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* ---------------- UPDATE PRODUCT ---------------- */
exports.updateproduct = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
      { new: true}
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteproduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
