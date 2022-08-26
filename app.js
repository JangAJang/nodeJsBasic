"use strict";

const express = require("express");
const router = require('./routes');
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser');
const controller = require('./controllers');
const app = express();

const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    morgan(':method :url :status :res[content-length] - :response-time ms')
    );
app.use(cors());
app.use(parser.json());
app.get('/:id', controllers.get);
app.post('/', controllers.post);

app.use("/", home); //use = 미들웨어를 등록해준다. 

module.exports = app;  