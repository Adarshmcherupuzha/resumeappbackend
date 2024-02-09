const express=require("express")
const resmodel=require("../model/resentrymodel")
const router=express.Router()

router.post("/add",async(req,res)=>{

    let data=req.body
    let resu=new resmodel(data)
    let result=await resu.save()
    res.json({"status":"success"})
}


)


router.get("/viewall",async(req,res)=>{
    let result=await resmodel.find().populate("userId","name mobile email -_id").exec()
    res.json(result)
}


    
    )
    

module.exports = router;