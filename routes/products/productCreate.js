const router = require("express").Router();
const connection = require("../../db/dbconnection");  
const util = require("util"); // helper 

const pharmacist = require("../../middleware/pharmacist");

router.post("/",async(req,res)=>{
   const { name , description , category , price , img , expireDate , importDate , manufactureData , pharmacyid} = req.body ;
   try
   {
    const query = util.promisify(connection.query).bind(connection);
    // create object to insert it into data base
    const product = {
        name :name ,
        description : description ,
        category :category,
        price : price ,
        img : img ,
        expireDate : expireDate ,
        importDate : importDate ,
        manufactureData : manufactureData,
        pharmacyid : pharmacyid
    };
    // insert object into data base 
    await query ("insert into product set ?",product);
    res.status(202).json(product);
   }
   catch(err)
   {
    res.status(404).json(err);
   }
})


module.exports = router ;