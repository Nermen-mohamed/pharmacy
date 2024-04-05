const router = require("express").Router();
const connection = require("../../db/dbconnection");  
const util = require("util"); // helper 

router.delete("/:id",async(req,res)=>{
    const orderid = req.params.id ;
    try
    {
        const query = util.promisify(connection.query).bind(connection);
        await connection.query('DELETE FROM `order` WHERE id = ?', [orderid]);
        res.status(202).json("the order rejected...");

    }
    catch(err)
    {
        res.status(404).json(err);
    }
})




module.exports = router ;
