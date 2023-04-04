require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const dotenv = require("dotenv")
const port = 8009;


// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });
dotenv.config()
app.use(express.json());
app.use(cookiParser());
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://sm-frontend-rouge.vercel.app/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(router);


app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})