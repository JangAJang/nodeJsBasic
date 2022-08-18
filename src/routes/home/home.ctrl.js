"use strict";

const users = {
    id: ["daf", "janghee", "lee"],
    password: ["123456", "janghee", "lee"],
}

const output = {
    home: (req, res)=>{
        res.render("/home/index");
    },
    login: (req, res) =>{
        res.render("home/login");
    },
};

const process = {
    login: (req, res) =>{
        const id = req.body.id, password = req.body.password;
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password){
                return res.json({
                    success: true,
                });
            }
        }
    },
};

module.exports = {
    output, 
    process,
};

