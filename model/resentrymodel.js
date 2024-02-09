const mongoose=require("mongoose")

const resschema=mongoose.Schema(
    {
        
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"candidates"
        },
        degree:{
            type:String
        },
        pg:{
            type:String
        },
        skills:{
            type:String
        },
        hobbies:{
            type:String
        }
    }
)
module.exports=mongoose.model("resumes",resschema)
