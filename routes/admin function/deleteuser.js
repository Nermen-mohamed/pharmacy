const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const admin = require("../../middleware/admin");

// api => http://localhost:4040/deletuser/id
// function delete user bu only admin
router.delete("/:id",admin,async(req,res)=>{
    try
    {
        const query = util.promisify(connection.query).bind(connection);
        const userobg = await query ("select * from user where id = ?",req.params.id);
        if(userobg[0])
        {
            await query ("DELETE FROM user WHERE id = ? ",req.params.id);
            res.status(200).json("the user deleted");

        }
        else
        {
            res.status(404).json("the user not found....");
        }

    }
    catch(err)
    {
        res.status(404).json(err)
    }
})



module.exports = router ;