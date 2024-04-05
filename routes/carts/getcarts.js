const router = require("express").Router();
const connection = require("../../db/dbconnection");  
const util = require("util"); // helper 

router.get("/:id",async(req,res)=>{
    const patientid = req.params.id;
    try
    {
        const query = util.promisify(connection.query).bind(connection);
        const order = await query('SELECT * FROM `order` WHERE status = true and patientid = ?',[patientid]);
        if(order[0])
        {
            res.status(200).json(order);
        }
        else
        {
            res.status(404).json("not orders found");
        }
    }

    catch(err)
    {
        res.status(404).json(err)
    }
})



module.exports = router ;
