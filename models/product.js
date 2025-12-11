const mongoose=require("mongoose")
const productschema=new mongoose.Schema({
          name:{type:String,required:true},
          price:{type:Number,required:true}
})
module.exports=mongoose.model("product",productschema);