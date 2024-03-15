const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const admin = require("../../middleware/admin");



// api -> http://localhost:4040/getusers
// function get all user 

router.get("/",admin,async(req,res)=>{
    try
    {
        const query = util.promisify(connection.query).bind(connection);
        const usersobj = await query ("select * from user ");
        if(usersobj)
        {
             res.status(200).json(usersobj);
        }
        else
        {
            res.status(404).json("the user not found....")
        }
    }
    catch(err)
    {
        res.status(404).json(err)
    }
})


module.exports = router ;