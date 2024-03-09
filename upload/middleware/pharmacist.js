const connection = require("../db/dbconnection");
const util = require("util"); // helper 

const pharmacist= async (req,res,next)=>{
    
    const query = util.promisify(connection.query).bind(connection);
    const {token} = req.headers;
    const pharmacist = await query("select * from user where token =?",[token]);
    if(pharmacist[0] && pharmacist[0].status=="pharmacist")
    {
        next();
    }
    else
    {
        res.status(403).json({
            msg:"YOU ARE NOT PHARMACY TO USE THIS PAGE ....."
        })
    }
    
}


module.exports = pharmacist;