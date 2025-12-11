const Product=require('../models/product')

exports.createproduct=async (req,res)=>{
          try{
              const product=await Product.create(req.body);
           res.json(product);
           res.status(200);
          }

          catch(err){                                                                                                                                                                                                                                                                                                                               
            res.status(500).json({err: err.message});
          }
}

exports.getproducts=async(req,res)=>{
          try{
                    const products= await Product.find({})
                    res.json(products)
                    res.status(200)
          }
          catch(error){
                    res.status(400).json({error: error.message})

          }
}