var express = require("express");
var router = express.Router();

const { home,register,readall } = require("../controllers/indexController");

router.get("/", home);

router.post("/register", register);

router.get("/readall", readall);

// router.route("/").get((req,res,next)=>{})

module.exports = router;