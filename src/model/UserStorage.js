"use strict"

class UserStorage{
    static #users = {
        id: ["daf", "janghee", "lee"],
        password: ["123456", "janghee", "lee"],
        name: ["이장희", "어장희", "아장희"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
    }, {});
        return newUsers;
    }

    static getUserInfo(newId){
        const users = this.#users;
        const index = users.id.indexOf(newId);
        const userInfo = Object.keys(users).reduce((newUser, info)=>{
            newUser[info] = users[info][index];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;