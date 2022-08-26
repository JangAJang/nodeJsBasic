"use strict"

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    passwordCheck = document.querySelector("#password-check"),
    registerBtn = document.querySelector("#button");
registerBtn.addEventListener("click", register);

function register(){
    if(!id.value) return alert("Enter your id");
    if(password.value!==passwordCheck.value){
        return alert("Password Different");
    }

    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res)=> res.json())
    .then((res)=>{
        if(res.success){
            location.href = "/login";
        }
        else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error("회원가입중 에러 발생");
    });
}

