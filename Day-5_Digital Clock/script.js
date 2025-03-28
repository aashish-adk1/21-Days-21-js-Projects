const container=document.querySelector(".container");

function time(){
const date= new Date();
container.innerHTML = date.toLocaleTimeString("ne-NP");
}

setInterval(time,1000);
