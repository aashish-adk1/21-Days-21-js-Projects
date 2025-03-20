const counter= document.querySelector(".counter");
const setTime=document.querySelector(".set-btn");
const startTimer=document.querySelector(".start-btn");
const input=document.querySelector(".input");
const time=document.querySelector(".time");


let inputValue;

setTime.addEventListener("click",setTheTimer);
startTimer.addEventListener("click",startTheTimer);

function setTheTimer(){
    inputValue= input.value;
    if(inputValue<=0){
        alert("Please enter a valid time.")
    }
    else{
        
        time.innerHTML="00:" + inputValue;
}
    
    
}

function startTheTimer(){
    const myInterval= setInterval(countdown,1000);
    function countdown(){
        if(inputValue===0){
            clearInterval(myInterval);
            time.innerHTML="Time's Up.";
            return;
        }
        else{
    inputValue-=1;
    time.innerHTML = "00:" + inputValue;
        }
    
}
}