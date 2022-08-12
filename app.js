"use strict";

const express = require("express");
const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");

const home = require("./routes/home");
app.use("/", home); //use = 미들웨어를 등록해준다. 

module.exports = app;