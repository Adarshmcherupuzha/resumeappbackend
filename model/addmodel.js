const mongoose=require("mongoose")

const candidateschema=mongoose.Schema(
    {
        name:String,
        mobile:String,
        email:String,
        password:String
    }
)
module.exports=mongoose.model("candidates",candidateschema)
