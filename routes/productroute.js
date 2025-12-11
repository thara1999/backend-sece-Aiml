const express=require("express");
const { createproduct, getproducts } = require("../controllers/productcontroller");

const router=express.Router();

router.post('/',createproduct);
router.get('/',getproducts)
module.exports=router