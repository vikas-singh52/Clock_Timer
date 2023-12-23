
function addTimer(input){
    

    let div = document.createElement("div");
        
    let p1 = document.createElement("p");
    p1.innerText = "Time Left : ";
    
    let p2 = document.createElement("p");
    
    let timer = setInterval(myTimer,1000);
    function myTimer(){
        if(input.sec>0){
            if(input.hr==0 && input.min==0 && input.sec==0){
                clearInterval(timer);
            }
            input.sec--;
        }
        if(input.sec==0){
            if(input.min>0){
                input.min--;
            }
            if(input.hr==0 && input.min && input.sec==0){
                clearInterval(timer);
            }
            input.sec = 60;          
        }
        if( input.min==0 && input.sec==1){
            if(input.hr>0){
                input.hr--;
            }
            if(input.hr!=0){
                input.min = 60;
                if(input.hr==0 && input.min==0 && input.sec==0){
                    clearInterval(timer);
                    
                }
                input.sec = 60;
            }
            
        }
        
        

        
        p2.innerText = `${input.hr}:${input.min}:${input.sec}`;
    }
    /* p2.innerText = `${input.hr}:${input.min}:${input.sec}`;
    */
    viewContainer.appendChild(div);
    div.appendChild(p1);
    div.appendChild(p2);
    

    let style = div.style;
    
    style.backgroundColor = "#34344A";
    style.border = "none";
    style.padding ="15px 10px";
    style.margin = "20px auto";
    style.borderRadius =  "10px";
    style.width = "50%";
    style.display = "flex";
    style.justifyContent = "space-between";
    style.boxSizing = "border-box";

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.id = `btn${idValue}`;
    idValue++;
    div.appendChild(btn);
    btn.addEventListener("click", deleteTimer);


    btn.style.color = "black";
    btn.style.backgroundColor = "yellow";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";
    btn.style.padding = "5px";

    displayMsgPara.style.display = "none";
}

function deleteTimer(e){

    let targetBtn= e.target;
    let targetDiv = targetBtn.parentNode;
    targetDiv.remove();
    if(viewContainer.childNodes.length==1){
        displayMsgPara.style.display = "block";
        
    }


}