const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const pharmacist  = require("../../middleware/pharmacist");

router.post("/:id",pharmacist,async(req,res)=>{
    try
    {
        const {pharmacistID,pharmacyID,hours}=req.body;
        const query = util.promisify(connection.query).bind(connection);
        const pharmacy = await query ("select * from pharmacy where ownerid = ?",req.params.id);
        if(pharmacy[0])
        {
           // prepare object to insert
           const pharmacistobj = {
            pharmacistID:pharmacistID,
            pharmacyID:pharmacyID,
            hours:hours
           };

           // validation of farmacist
           const pp = await query ("select * from user where id = ?",pharmacistID);
           const pp2 = await query ("select * from pharmacist where pharmacistID = ?",pharmacistID);
           if(!pp[0] || pp[0].status!="pharmacist")
           {
              res.status(404).json("the id of pharmacist not exist..");
           }
           else
           {
           // insert object in data base 
           await query ("insert into pharmacist set ?",pharmacistobj);
           res.status(200).json(req.body);
           }

        }
        else
        {
            res.status(404).json("please create pharmacy before this step...")
        }
    }
    catch(err)
    {
        res.status(404).json(err)
    }
})


module.exports = router;