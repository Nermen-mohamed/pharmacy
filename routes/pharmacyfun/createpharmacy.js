const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const pharmacist = require("../../middleware/pharmacist");


router.post("/:id",pharmacist,async(req,res)=>{
    const {name ,location,contact} = req.body ;
    try 
    {
        // prepare the pharmacy object 
        const pharmacyobj = {
            name : req.body.name,
            location : req.body.location,
            contact : req.body.contact,
            ownerid	: req.params.id
        }
        // insert object in data base 
        const query = util.promisify(connection.query).bind(connection);
        await query ("insert into pharmacy set ? ", pharmacyobj);
        res.status(200).json(req.body);

    }
    catch(err)
    {
        res.status(404).json(err)
    }
})





module.exports = router;