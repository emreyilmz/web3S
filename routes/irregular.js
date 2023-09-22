const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Irregular = mongoose.model("Irregular");
const requireLogin = require("../middleware/requireLogin")


router.get("/irregular", requireLogin,(req, res) => {
    Irregular.find()
        .then((lists) => {
            res.json({ lists: lists });
        })
        .catch((err) => {
            console.log(err);
        });
});


router.post("/irregular", (req, res) => {
    const { first,	second,	third,	translate,	add,	add2 } = req.body;

    if (!first ||  !second || !third ||  !translate  ) {
        return res.status(422).json({ error: "please fill all fields" });
    }

    const list = new Irregular({
        first,	second,	third,	translate,add,add2
    });

    list.save()
        .then((list) => {
            res.json({ message: "succesfully" });
        })
        .catch((err) => {
            return res.status(422).json({ error: err });
        });
});

module.exports = router;

