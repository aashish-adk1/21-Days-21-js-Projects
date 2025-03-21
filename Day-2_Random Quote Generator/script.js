const quotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "Happiness depends upon ourselves.", author: "Aristotle" }
];


const title = document.querySelector(".title")
const btn = document.querySelector(".btn")
const para = document.querySelector(".author")




function add() {

    const random = Math.floor(Math.random() * 10)
    title.innerHTML = quotes[random].quote
    para.innerHTML = `By:${quotes[random].author}`
}


btn.addEventListener("click", add);
