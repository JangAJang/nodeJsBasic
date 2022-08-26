"use strict";

const User = require("../../model/User");
const UserStorage = require("../../model/UserStorage");

const models = require('../models');
    
    module.exports = {
        get: (req, res) => {
            const id = req.params.id;
            if(!id){
                return res.status(401).send('Unauthorized Id');
            }else{
                models.get(id, (error, result) => {
                    if(error){
                        res.status(404).send('can not find id');
                    }else{
                        res.status(200).json(result);
                    };
                });
            };
        },
        post: (req, res) => {
            const name = req.query.name;

            if(!name){
                res.status(401).send('Unauthorized Name');
            }else{
                models.post(String(name), (error, result) => {
                    if(error){
                        res.status(404).send('can not find name');
                    }else{
                        res.status(200).send('Success INSERT INTO');
                    };
                });
            };
        },
    };

const output = {
    home: (req, res)=>{
        res.render("home/home");
    },
    login: (req, res) =>{
        res.render("home/login");
    },
    register: (req, res)=>{
        res.render("home/register");
    }
};

const process = {
    login: (req, res) =>{
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },

    register: (req, res) =>{
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};

module.exports = {
    output, 
    process,
};
