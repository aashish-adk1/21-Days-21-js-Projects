const computer=document.querySelector(".computer");
const message=document.querySelector(".message");
const score=document.querySelector(".score");
const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissor=document.querySelector(".scissor");

let c_score = 0;
let p_score = 0;

function handleComputer(){
    let picked=Math.floor(Math.random()*3);
    if(picked===0){
        return 'rock';}
        else if(picked===1){
            return 'paper';}
            else{
                return 'scissor';
            }

        }
    


function handleClick(clicked) {
    const comp = handleComputer();
    computer.innerHTML = `<h3>Computer chose: ${comp}</h3>`;

    if (comp === clicked) {
        message.innerHTML = "It's a Tie!";
    } else if (
        (comp === "rock" && clicked === "paper") ||
        (comp === "paper" && clicked === "scissor") ||
        (comp === "scissor" && clicked === "rock")
    ) {
        message.innerHTML = "You win!";
        p_score++;
    } else {
        message.innerHTML = "Computer wins!";
        c_score++;
    }

   
        score.innerHTML = `Computer=${c_score}:${p_score}=You`;
    
}


rock.addEventListener("click",()=>handleClick('rock'));
paper.addEventListener("click", () => handleClick('paper'));
scissor.addEventListener("click", () => handleClick('scissor'));

