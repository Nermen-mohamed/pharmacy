const connection = require("../db/dbconnection");
const util = require("util"); // helper 

const craftman= async (req,res,next)=>{
    
    const query = util.promisify(connection.query).bind(connection);
    const {token} = req.headers;
    const craftman = await query("select * from user where token =?",[token]);
    if(craftman[0] && craftman[0].status=="admin")
    {
        next();
    }
    else
    {
        res.status(403).json({
            msg:"YOU ARE NOT ADMIN TO USE THIS PAGE ....."
        })
    }
    
}


module.exports = craftman;