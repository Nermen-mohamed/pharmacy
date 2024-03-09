const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const patient = require("../../middleware/patient");

router.delete("/:id",patient,async(req,res)=>{
    try
    {
        const query = util.promisify(connection.query).bind(connection);
        const chat = await query ("select * from chat where id = ?", req.params.id);
        if(chat[0])
        {
            await query("delete from chat where id = ?",req.params.id);
            res.status(200).json("the chat deleted successfully");

        }
        else{
            res.status(404).json("the chat not found");
        }
    }
    catch(err)
    {
        res.status(404).json(err)
    }
})


module.exports = router;