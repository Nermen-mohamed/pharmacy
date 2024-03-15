const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"bqhpcjftgwisqapagnsv-mysql.services.clever-cloud.com",
    user:"ujkadrg2qwqh9jho",
    password:"vJ5IwW3G9NGNiMWA4pUf",
    database:"bqhpcjftgwisqapagnsv",
    port:"3306"

})

connection.connect((err)=>{
    if(err)
    {
        throw err ;
    }
    console.log("DATABASE IS CONNECTED");
})

module.exports = connection ;