let form = document.querySelector("form");
let body = document.querySelector("body");
let subBtn = document.querySelector("#setTimer");
let displayMsgPara = document.querySelector("#displayMsgPara");
let viewContainer = document.querySelector(".viewContainer");
let idValue = 1;
console.log(form);


form.addEventListener("submit", onformSubmit);

function onformSubmit(obj){
    obj.preventDefault();
    let inputObj = {
    hr: form.hour.value,
    min: form.minute.value,
    sec: form.second.value
    }
    if(inputObj.hr=="" && inputObj.min=="" && inputObj.sec==""){
        
        let p = document.createElement("p");
        p.innerText = "Please select Time to set Timer"; 
        body.appendChild(p);
    }
    else{
       addTimer(inputObj);
    }
    
    
    
}
