//npm run dev
//setting dotenv file
require("dotenv").config({path:"./.env"});
const express = require("express");
const app = express();


//db connection
require("./models/connect").mongoconnection();

const indexRouter = require("./routes/indexRouter");

//setting logger
app.use(require("morgan")("tiny"));

//bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router setup -> must be second last in the file
app.use("/api/user",indexRouter);

//wild card route
app.all("*", (req,res) =>{
    res.status(404).json({ url: req.url, message: "Page Not Found 404"});
})

//creating server -- must be at the last
app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port ${process.env.PORT }`);
});
