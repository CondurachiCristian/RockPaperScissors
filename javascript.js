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

function getNumbers() {
   switch (humanSelection) {
      case "Rock" :
         humanSelection = 0;
         break;
      case "Paper" :
         humanSelection = 1;
         break;
      case "Scissors" :
         humanSelection = 2;
         break;   
   }
   switch (computerSelection) {
      case "Rock" :
         computerSelection = 0;
         break;
      case "Paper" :
         computerSelection = 1;
         break;
      case "Scissors" :
         computerSelection = 2;
         break;
   }
};

function playGame(){
   let score = "Score";
   let humanScore = 0;
   let computerScore = 0;
   function playRound(humanChoice, computerChoice) {
      if (humanChoice == 0 && computerChoice == 2) {
         ++humanScore;
         getNames();
         console.log("You chose:");
         console.log(humanSelection, computerSelection);
         console.log(score);
         console.log(humanScore, computerScore);
         console.log("You win the round!");
         getNumbers()
         humanSelection = getHumanChoice();
         computerSelection = getComputerChoice();
         return
      } else if (humanChoice == 2 && computerChoice == 0) {
         ++computerScore;
         getNames();
         console.log("You chose:");
         console.log(humanSelection, computerSelection);
         console.log(score);
         console.log(humanScore, computerScore);
         console.log("You lose the round!");
         getNumbers()
         humanSelection = getHumanChoice();
         computerSelection = getComputerChoice();
         return
      } else if (humanChoice > computerChoice) {
         ++humanScore;
         getNames();
         console.log("You chose:");
         console.log(humanSelection, computerSelection);
         console.log(score);
         console.log(humanScore, computerScore);
         console.log("You win the round!");
         getNumbers()
         humanSelection = getHumanChoice();
         computerSelection = getComputerChoice();
         return
      } else if (humanChoice < computerChoice) {
         ++computerScore;
         getNames();
         console.log("You chose:");
         console.log(humanSelection, computerSelection);
         console.log(score);
         console.log(humanScore, computerScore);
         console.log("You lose the round!");
         getNumbers()
         humanSelection = getHumanChoice();
         computerSelection = getComputerChoice();
         return
      } else {
         getNames();
         console.log("You chose:");
         console.log(humanSelection, computerSelection);
         console.log(score);
         console.log(humanScore, computerScore);
         console.log("You draw the round!");
         getNumbers()
         humanSelection = getHumanChoice();
         computerSelection = getComputerChoice();
         return
      }
   };
   while (humanScore < 5 && computerScore < 5) {
      playRound(humanSelection, computerSelection)
   } if (humanScore > computerScore) {
      console.log("You won the game!")
      return
   } else {
      console.log("You lost the game!")
      return
   }
}

playGame()