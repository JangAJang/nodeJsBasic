"use strict";

const express = require("express");
const app = express();

const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");
const PORT = 3000;
app.listen(PORT, function(){
    console.log("서버 가동");
});
app.use(express.static(`${__dirname}/src/public`));
app.use("/", home); //use = 미들웨어를 등록해준다. 

module.exports = app;