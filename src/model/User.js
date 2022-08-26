"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body) {
        this.body = body;
    }

    login(){
        const client = this.body;
        const { id, password } = UserStorage.getUserInfo(client.id);
        if(id){
            if(id === client.id && password === client.password){
                return {success : true};
            }
            return {success:false, msg: "wrong password"};
        }
        return {success:false, msg:"undefined user id"};
    }

    register(){
        const client = this.body;
        UserStorage.save(client);
    }
}

module.exports = User;