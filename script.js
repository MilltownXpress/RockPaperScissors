
// const button = document.querySelector("button");
// function greet(){
//     const name = prompt("What is your name?");
//     alert (`Hello ${name}, nice to see you!`);
//     button.addEventListener("click", greet);
// }

let getPlayerChoice = prompt("Choose Rock, Paper, or Scissors").toLocaleLowerCase();
// console.log(getPlayerChoice);
if (getPlayerChoice === "rock" || getPlayerChoice === "scissors" || getPlayerChoice === "paper") {
    console.log("You chose " +  `${getPlayerChoice}`);
    }else{
        console.log("Error! Please Try Again!");
    }

let getComputerChoice = Math.random();

if (getComputerChoice < 0.34) {
    getComputerChoice = "rock";
} else if(getComputerChoice <= 0.67) {
    getComputerChoice = "paper";
} else {
    getComputerChoice = "scissors";
    
}
console.log("The computer chooses " + `${getComputerChoice}`);

//Declare Winner
const winner = declareWinner(getPlayerChoice, getComputerChoice);

function declareWinner(getPlayerChoice, getComputerChoice) {
    if (getPlayerChoice === "rock" && getComputerChoice === "scissors") {
        console.log("You win! Rock beats scissors!");
    }else if (getPlayerChoice === "rock" && getComputerChoice === "rock"){
        console.log("It's a tie! You both chose rock.");
    }else if (getPlayerChoice === "rock" && getComputerChoice === "paper"){
        console.log("You lose! Paper beats rock.");
    }else if (getPlayerChoice === "paper" && getComputerChoice === "paper"){
        console.log("It's a tie! You both chose paper.");
    }else if (getPlayerChoice === "paper" && getComputerChoice === "rock"){
        console.log("You win! Paper beats rock!");
    }else if (getPlayerChoice === "paper" && getComputerChoice === "scissors"){
        console.log("You lose! Scissors beats paper!");
    }else if (getPlayerChoice === "scissors" && getComputerChoice === "scissors"){
        console.log("It's a tie! You both chose scissors.");
    }else if (getPlayerChoice === "scissors" && getComputerChoice === "paper"){
        console.log("You win! Scissors beats paper!");
    }else (getPlayerChoice === "scissors" && getComputerChoice === "rock"){
        console.log("You lose! Rock beats scissors!");
    }
    }

    
console.log(winner);






