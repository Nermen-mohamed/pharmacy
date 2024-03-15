const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const admin = require("../../middleware/admin");


// function update {name , email , phone , date , status} in user by only admin....

router.put("/:id",admin,async(req,res)=>{
    const {name , email , phone , date , status}= req.body;
    const query = util.promisify(connection.query).bind(connection); // transform query to promise to can use await/ async
    try
    {
      const userobj = await query("select * from user where id = ?",req.params.id);
      if(userobj[0])
      {
        // prepare object 
            const userobj2 ={
                name : name,
                email : email,
                phone : phone,
                status : status,
                date : date,
              }
        // update the specific user in data base 
        await query ("update user set ? where id = ?",[userobj2,req.params.id]);
        res.status(200).json(req.body);
      }
      else
      {
        res.status(404).json("sorry the user not found ....");
      }

    }
    catch(err)
    {
        res.status(404).json(err)
    }
})



module.exports = router ;