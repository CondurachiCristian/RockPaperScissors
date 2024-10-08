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

let score = "Score";
let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function getNames() {
   switch (humanSelection) {
      case 0:
         humanSelection = "Rock";
         break;
      case 1 :
         humanSelection = "Paper";
         break;
      case 2 :
         humanSelection = "Scissors";
         break;   
   }
   switch (computerSelection) {
      case 0 :
         computerSelection = "Rock";
         break;
      case 1 :
         computerSelection = "Paper";
         break;
      case 2 :
         computerSelection = "Scissors";
         break;
   }
};

function playRound(humanChoice, computerChoice) {
   if (humanChoice == 0 && computerChoice == 2) {
      ++humanScore;
      getNames();
      console.log("You chose:");
      console.log(humanSelection, computerSelection);
      console.log(score);
      console.log(humanScore, computerScore);
      console.log("You win the round!");
      return
   } else if (humanChoice == 2 && computerChoice == 0) {
      ++computerScore;
      getNames();
      console.log("You chose:");
      console.log(humanSelection, computerSelection);
      console.log(score);
      console.log(humanScore, computerScore);
      console.log("You lose the round!");
      return
   } else if (humanChoice > computerChoice) {
      ++humanScore;
      getNames();
      console.log("You chose:");
      console.log(humanSelection, computerSelection);
      console.log(score);
      console.log(humanScore, computerScore);
      console.log("You win the round!");
      return
   } else if (humanChoice < computerChoice) {
      ++computerScore;
      getNames();
      console.log("You chose:");
      console.log(humanSelection, computerSelection);
      console.log(score);
      console.log(humanScore, computerScore);
      console.log("You lose the round!");
      return
   } else {
      getNames();
      console.log("You chose:");
      console.log(humanSelection, computerSelection);
      console.log(score);
      console.log(humanScore, computerScore);
      console.log("You draw the round!");
      return
   }
};

playRound(humanSelection, computerSelection);