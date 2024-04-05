const router = require("express").Router();
const connection = require("../../db/dbconnection");  
const util = require("util"); // helper 

router.get("/",async(req,res)=>{
    try
    {
        const query = util.promisify(connection.query).bind(connection);
        const products = await query ("select * from product ");
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