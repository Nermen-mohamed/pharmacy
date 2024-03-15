const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const patient = require("../../middleware/patient");

router.get("/:id",patient,async(req,res)=>{
    try
    {
        const query = util.promisify(connection.query).bind(connection);
        const pharmacist = await query ("select DISTINCT * from pharmacist where pharmacyID = ?",req.params.id);
        if(pharmacist[0])
        { 
            const listOfObjects = [];
            for( let i = 0;i<pharmacist.length;i++)
            {
                const obj = await query ("select * from user where id = ?",pharmacist[i].pharmacistID)
                listOfObjects.push(obj);
            }
            res.status(200).json(listOfObjects);

        }
        else
        {
            res.status(404).json("sorry the id of pharmacy dont have any pharmacist...");
        }

    }
    catch(err)
    {
        res.status(404).json(err)
    }
})


module.exports = router;