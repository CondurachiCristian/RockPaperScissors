function getComputerChoice() {
   let choice = Math.floor(Math.random()*3);
   if (choice == 0) {
      return choice
   } else if (choice == 1) {
      return choice
   } else {
      return choice
   }
};

function getHumanChoice() {
   let answer = prompt("Rock, Paper or Scissors?");
   answer = answer.toLowerCase()
   if (answer == "rock") {
      answer = 0
   } else if (answer == "paper") {
      answer = 1
   } else answer = 2
      return answer;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
   if (humanChoice == 0 && computerChoice == 2) {
      ++humanScore
      return "You win!"
   } else if (humanChoice == 2 && computerChoice == 0) {
      ++computerScore
      return "You lose!"
   } else if (humanChoice > computerChoice) {
      ++humanScore
      return "You win!"
   } else if (humanChoice < computerChoice) {
      ++computerScore
      return "You lose!"
   } else {
      return "You draw!"
   }
 };
 
 let humanSelection = getHumanChoice();
 let computerSelection = getComputerChoice();

 
 
 playRound(humanSelection, computerSelection);

let score = "Score";
 console.log(humanSelection, computerSelection)
 console.log(score)
 console.log(humanScore, computerScore)
 console.log(playRound(humanSelection, computerSelection));
