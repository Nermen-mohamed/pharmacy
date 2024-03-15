const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body, validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const patient = require("../../middleware/patient");
const upload = require("../../middleware/uploadimgs");

router.post("/:id", patient, upload.single("msg"), async (req, res) => {
    try {
        const query = util.promisify(connection.query).bind(connection);
        const chat = await query("select * from chat where id = ?", req.params.id);
        if (chat[0]) {
            // prepare the object 
            const msgobj = {
                source: "patient",
                msg: req.file.originalname,
                chatID: req.params.id
            }
            await query("insert into msgs set ?", msgobj);
            const msgs = await query("select * from msgs where chatID = ?", req.params.id);
            for (let i = 0; i < msgs.length; i++) {
                delete (msgs[i].id);
                delete (msgs[i].chatID);
            }

            res.status(200).json(msgs);
        }
        else {
            res.status(404).json("the chat not exist");
        }
    }
    catch (err) {
        res.status(404).json(err)
    }
})


module.exports = router;