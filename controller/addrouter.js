const express = require("express");
const candidaterouter = require("../model/addmodel");
const bcrypt=require("bcryptjs")

const router = express.Router();

hashpasswordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)



}





router.post("/signup", async (req, res) => {
  let {data}={"data":req.body}
  let password=data.password
  hashpasswordgenerator(password).then(
    (hashedpassword)=>{
    console.log(hashedpassword)
    data.password=hashedpassword
    console.log(data)
    
  let user = new candidaterouter(data);
  let result = user.save();
res.json({ status: "success" });


}
  )
  
 
});



router.post("/signin",async(req,res)=>{
    let input=req.body
    
    
    let email=req.body.email
    let data=await candidaterouter.findOne({"email": email})
    if(!data)
    {
        return res.json(
            {
                "status":"invalid user"
            }
        )
    }
console.log(data)
let dbpassword=data.password
let inputpswd=req.body.password
console.log(dbpassword)
console.log(inputpswd)
const match=await bcrypt.compare(inputpswd,dbpassword)
if(!match){
    return res.json(
        {
            "status":"invalid password"
        }
    )
}
  

res.json(
    {
        "status":"success"
    }
)




}




)





module.exports = router;
