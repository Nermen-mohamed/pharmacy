const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const patient = require("../../middleware/patient");



// function make patint rate pharmact 
// api -> http://localhost:4040/rating/PHARMACYID
router.post("/:id",patient,body("rating"),async(req,res)=>{
    try
    {
        const query = util.promisify(connection.query).bind(connection);
        const pharmacy = await query ("SELECT * FROM pharmacy where id = ?",req.params.id);
        if(pharmacy[0])
        {
           // insert raiting in data base 
           await query ("UPDATE pharmacy SET rating = ? WHERE id = ?",[req.body.rating,req.params.id]);
           res.status(200).json(req.body);
        }
        else
        {
           res.status(404).json("sorry the pharmacy not found...");
        }
    }
    catch(err)
    {
        res.status(404).json(err)
    }
})


module.exports = router;