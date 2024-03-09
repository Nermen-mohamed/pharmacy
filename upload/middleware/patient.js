const connection = require("../db/dbconnection");
const util = require("util"); // helper 

const patient= async (req,res,next)=>{
    
    const query = util.promisify(connection.query).bind(connection);
    const {token} = req.headers;
    const patient = await query("select * from user where token =?",[token]);
    if(patient[0] && patient[0].status=="patient")
    {
        next();
    }
    else
    {
        res.status(403).json({
            msg:"YOU ARE NOT patient TO USE THIS PAGE ....."
        })
    }
    
}


module.exports = patient;