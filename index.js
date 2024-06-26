//================= init express app ===============
const express = require("express");     
const app = express();

//=================Global middleware==================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("upload"));
const cors = require("cors");
app.use(cors());  // allow https requst,respons

//========= call routes ==========//
//======== auth function ========//
const register = require("./routes/auth/register");
const login = require("./routes/auth/login");




//======= admin function ========// 
const getusers = require("./routes/admin function/getusers");
const deleteuser = require("./routes/admin function/deleteuser");
const updateuser = require ("./routes/admin function/updateuser");
// ======= pharmacy function =======// 
const createpharmacy = require("./routes/pharmacyfun/createpharmacy");
const getpharmacies = require("./routes/pharmacyfun/getallpharmacies");
const deletepharmacy = require("./routes/pharmacyfun/deletepharmacy");
const updatepharmacy = require("./routes/pharmacyfun/updatepharmacy");
const rating = require("./routes/pharmacyfun/ratepharmacy");
// ======= pharmacist function =======// 
const addpharmacist = require("./routes/pharmacist fun/addphramacist");
const getpharmasict = require("./routes/pharmacist fun/getpharmacis");
//========= chat function =========// 
const createchat = require("./routes/chat/createchat");
const deletechat = require("./routes/chat/deletechat");
//========== msg function ========//
const sendmsgP = require("./routes/msgs/sendmsgP");
const sendmsgs = require("./routes/msgs/sendmsgS");
const uploadimgP = require("./routes/msgs/uploadpicP");
const uploadimgS = require("./routes/msgs/uploadimgS");
//========== product functions =======//
const createptoduct = require("./routes/products/productCreate");
const getproducts = require("./routes/products/getallproducts");
const getproductbycategory = require("./routes/products/getproductbycategory");
//========== order function =========//
const createorder = require("./routes/order/createorder");
const getorders = require("./routes/order/getorders");
const acceptorder = require("./routes/order/acceptorder");
const rejectorder = require("./routes/order/rejectorder");
//=========== carts ==========//
const getcarts = require("./routes/carts/getcarts");

// ======== use routes ===========//
app.use("/register",register);
app.use("/login",login);
app.use("/getusers",getusers);
app.use("/deletuser",deleteuser);
app.use("/updateuser",updateuser);
app.use("/createpharmacy",createpharmacy);
app.use("/getpharmacies",getpharmacies);
app.use("/deletepharmacy",deletepharmacy);
app.use("/updatepharmacy",updatepharmacy);
app.use("/rating",rating);
app.use("/addpharmacist",addpharmacist);
app.use("/getpharmasict",getpharmasict);
app.use("/createchat",createchat);
app.use("/deletechat",deletechat);
app.use("/sendmsgP",sendmsgP);
app.use("/sendmsgs",sendmsgs);
app.use("/uploadimgP",uploadimgP);
app.use("/uploadimgS",uploadimgS);
app.use("/createptoduct",createptoduct);
app.use("/getproducts",getproducts);
app.use("/getproductbycategory",getproductbycategory);
app.use("/createorder",createorder);
app.use("/getorders",getorders);
app.use("/acceptorder",acceptorder);
app.use("/rejectorder",rejectorder);
app.use("/getcarts",getcarts);
//======== run the app ============//
app.listen(4040,()=>{

    console.log("SERVER IS RUNNING....");
})


app.get("/test",async(req,res) => {
    res.status(200).send("server is running succesfully")
})
