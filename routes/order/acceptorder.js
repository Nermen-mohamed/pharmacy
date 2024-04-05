const router = require("express").Router();
const connection = require("../../db/dbconnection");  
const util = require("util"); // helper 


router.post("/:id",async(req,res)=>{
    const orderid = req.params.id;
    try
    {
        const query = util.promisify(connection.query).bind(connection);
        await query('UPDATE `order` SET status = true WHERE id = ?', [orderid]);
        res.status("200").json("the order accepted");

    }
    catch(err)
    {
        res.status(404).json(err)
    }
})


module.exports = router;