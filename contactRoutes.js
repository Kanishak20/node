const express = require("express");
const router = express.Router();

router.route("/").get((req,res)=>{
    res.status(200).json({message:"get all contacts"});
});

router.route("/").post((req,res)=>{
    console.log(req.body)
    res.status(200).json({message:"post all contacts"});
});

router.route("/").delete((req,res)=>{
    res.status(200).json({message:"delete all contacts"});
});

router.route("/").put((req,res)=>{
    res.status(200).json({message:"update all contacts"});
});

module.exports = router;
