const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const pharmacist = require("../../middleware/pharmacist");


router.put("/:id",pharmacist,async(req,res)=>{
    const {name ,location,contact} = req.body ;
    try 
    {
        const query = util.promisify(connection.query).bind(connection);
        const pharmacy = await query ("select * from pharmacy where id = ?",req.params.id);
        if(pharmacy[0])
        {
        // prepare the pharmacy object 
        const pharmacyobj = {
            name : req.body.name,
            location : req.body.location,
            contact : req.body.contact,
        }
        // insert object in data base 
        await query ("update pharmacy set ? where id = ? ", [pharmacyobj,req.params.id]);
        res.status(200).json(req.body);
    }
    else
    {
        res.status(404).json("sorry the pharmacy not found....");
    }

    }
    catch(err)
    {
        res.status(404).json(err)
    }
})





module.exports = router;