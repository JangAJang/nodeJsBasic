"use strict";

const User = require("../../model/User");
const UserStorage = require("../../model/UserStorage");

const output = {
    home: (req, res)=>{
        res.render("home/home");
    },
    login: (req, res) =>{
        res.render("home/login");
    },
};

const process = {
    login: (req, res) =>{
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

module.exports = {
    output, 
    process,
};
