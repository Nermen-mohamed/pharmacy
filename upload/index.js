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
app.use("/uploadimgS",uploadimgS)
//======== run the app ============//
app.listen(4040,"localhost",()=>{

    console.log("SERVER IS RUNNING....");
})