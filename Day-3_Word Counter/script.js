const input=document.querySelector(".input");
const button=document.querySelector(".btn");
const words=document.querySelector(".words");
const char=document.querySelector(".char");



button.addEventListener("click",count);

function count(){
    const data=input.value;
    words.innerHTML = `No. of words:${data.split(" ").length}` ;
    char.innerHTML = `No. of characters:${data.split("").length}` ;

}