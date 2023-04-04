let getComputerChoice = Math.random();
if (getComputerChoice < 0.34) {
    getComputerChoice = "Rock";
} else if(getComputerChoice <= 0.67) {
    getComputerChoice = "Paper";
} else {
    getComputerChoice = "Scissors";
   
}
console.log(getComputerChoice);