const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const patient = require("../../middleware/patient");



// api -> http://localhost:4040/getpharmacies
// function get all pharmacies
router.get("/",patient,async(req,res)=>{
    try
    {
        const query = util.promisify(connection.query).bind(connection);
        const pharmacieslist = await query ("select * from pharmacy");
        if(pharmacieslist[0])
        {
            res.status(200).json(pharmacieslist);

        }
        else
        {
            res.status(404).json("sorry not found any pharmacy...");
        }
    }
    catch(err)
    {
        res.status(404).json(err)
    }
})


module.exports = router;