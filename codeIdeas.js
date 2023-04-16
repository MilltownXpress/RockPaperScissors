// Play round and Declare Winner

const playerSelection = getPlayerChoice;
const computerSelection = getComputerChoice;
const winner = playRound(playerSelection, computerSelection);
    


function playRound(getPlayerChoice, getComputerChoice) {
    if (getPlayerChoice === "rock" && getComputerChoice === "scissors"){
        console.log("You win! Rock beats scissors!");
    }else if (getPlayerChoice === "rock" && getComputerChoice === "rock"){
        console.log("It's a tie! You both chose rock.");
    }else if (getPlayerChoice === "rock" && getComputerChoice === "paper"){
        console.log("You lose! Paper beats rock.");
    
    if (getPlayerChoice === "paper" && getComputerChoice === "paper"){
        console.log("It's a tie! You both chose paper.");
    }else if (getPlayerChoice === "paper" && getComputerChoice === "rock"){
        console.log("You win! Paper beats rock!");
    }else if (getPlayerChoice === "paper" && getComputerChoice === "scissors"){
        console.log("You lose! Scissors beats paper!");
    }else if (getPlayerChoice === "scissors" && getComputerChoice === "paper"){
        console.log("You win! Scissors beats paper!");
    }else if (getPlayerChoice === "scissors" && getComputerChoice === "rock"){
        console.log("You lose! Rock beats scissors!");
    }else if (getPlayerChoice === "scissors" && getComputerChoice === "scissors")
        console.log("It's a tie! You both chose scissors.");   
    }

}

let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win"
let lose = "You lose"
let tie = "It is a tie"