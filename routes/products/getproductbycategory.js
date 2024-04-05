const router = require("express").Router();
const { body } = require("express-validator");
const connection = require("../../db/dbconnection");  
const util = require("util"); // helper 

router.get("/",body("category"),async(req,res)=>{
    try
    {
        const query = util.promisify(connection.query).bind(connection);
        const products = await query ("select * from product where category = ? ",req.body.category);
        if(products)
        {
            res.status(200).json(products);
        }
        else
        {
            res.status(404).json("SORRY THE PRODUCT NOT FOUND....");
        }

        
    }
    catch(err)
    {
        res.status(404).json(err)
    }
})


module.exports = router;