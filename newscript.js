
let choice = ["rock", "paper","scissors"];
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    let result = choice[Math.floor(Math.random() * choice.length)];
    return result;
}
      
// let playerChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
// console.log("You choose " + `${playerChoice}`);

function playerChoice() {
    let playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
    return playerSelection;
}

function playRound(playerChoice, computerPlay) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
      playerScore+=1; 
      console.log("You win! Rock beats scissors."); 
    }else if 
        (playerSelection == "rock" && computerSelection == "paper") {
        computerScore+=1;
        console.log("You lose! Paper beats rock.");
    }else{
        console.log("It's a tie!")
        

      
    }
}
