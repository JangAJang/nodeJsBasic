"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body) {
        this.body = body;
    }

    login(){
        const body = ths.body;
        const {id, password} = UserStorage.getUserInfo(body.id);
        if(id){
            if(id === body.id && password === body.password){
                console.log("success");
                return {success : true};
            }
            return {success:false, msg: "wrong password"};
        }
        return {success:false, msg:"undefined user id"};
    }
}

module.exports = User;