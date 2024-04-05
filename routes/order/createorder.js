const router = require("express").Router();
const connection = require("../../db/dbconnection");  
const util = require("util"); // helper 

const pharmacist = require("../../middleware/pharmacist");



router.post("/",async(req,res)=>{
    const { patientid , productid , pharmacyid , price , date}= req.body;
    try
    {
        // prepare object 
        const order = {
            patientid : patientid,
            productid : productid ,
            pharmacyid : pharmacyid ,
            price : price ,
            date : date
        };
        // insert the object in data base 
        const query = util.promisify(connection.query).bind(connection);
        await query('INSERT INTO `order` SET ?', order);
        await query ("UPDATE product SET quantity = quantity - 1 WHERE id = ?",productid);
        res.status(200).json(order);
    }
    catch(err)
    {
        res.status(404).json(err)
    }
})



module.exports = router ;