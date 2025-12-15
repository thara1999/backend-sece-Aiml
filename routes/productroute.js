const express=require("express");
const { createproduct, getproducts, updateproduct, deleteproduct } = require("../controllers/productcontroller");

const router=express.Router();

router.post('/',createproduct);
router.get('/',getproducts)
router.put('/',updateproduct)
router.delete('/',deleteproduct)
module.exports=router