const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const patient = require("../../middleware/patient");

router.post("/:id",patient,body("pharmacistID"),async(req,res)=>{
    try
    {
        const query = util.promisify(connection.query).bind(connection);
        const pharmacy = await query ("select * from user where id = ?",req.body.pharmacistID);
        const patient = await query ("select * from user where id = ?",req.params.id);
        const chat = await query ("select * from chat where pharmacistid = ? and patientid = ?",[req.body.pharmacistID,req.params.id]);
        if(chat[0])
        {
            res.status(400).json("the chat already exist");
        }
        else
        {
           // prepare the object 
           const chat = {
            name1 : pharmacy[0].name,
            name2:patient[0].name,
            pharmacistid : pharmacy[0].id,
            patientid : req.params.id
           };
           await query ("insert into chat set ?",chat);
           res.status(200).json(chat);
        }
        
    }
    catch(err)
    {
        res.status(404).json(err)
    }
})


module.exports = router;