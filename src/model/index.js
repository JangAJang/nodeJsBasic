"use strict"

const db = require("../db");

module.exports = {
    get: (id, callback) =>{
        const queryString = 'SELECT * FROM persone WHERE (table_name = ?)';
        const param = [Number(id)];
        db.query(queryString, param, (err, result)=>{
            callback(err, result);
        });        
    },

    post:(name, callback)=>{
        const queryString = 'INSERT INTO person(name) VALUES (?)';
        const param = [name];
        db.query(queryString, param, (err, result)=>{
            callback(err, result);
        });        
    }
}