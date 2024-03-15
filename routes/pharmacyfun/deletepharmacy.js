const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const pharmacist = require("../../middleware/pharmacist");

router.delete("/:id",pharmacist,async(req,res)=>{
    try
    {
        const query = util.promisify(connection.query).bind(connection);
        const pharmacyobj = await query ("SELECT * FROM pharmacy where id = ?",req.params.id);
        if(pharmacyobj[0])
        {
           await query ("delete from pharmacy where id = ?",req.params.id);
           res.status(200).json("the pharmacy deleted successfully....");
        }
        else
        {
            res.status(404).json("sorry the phamacy not found....");
        }
    }
    catch(err)
    {
        res.status(404).json(err)
    }
})


module.exports = router;