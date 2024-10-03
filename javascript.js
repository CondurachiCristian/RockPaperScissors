
function getComputerChoice(){ 
     Math.floor(Math.random()*3)
     if (Math.floor(Math.random()*3) == 0) {
        return 'I choose rock'
     } else if (Math.floor(Math.random()*3) == 1) {
        return 'I choose paper'
     } else {
        return 'I choose scissors'
     }
};

function getHumanChoice (){
    return prompt("Rock, Paper or Scissors?")
}

let humanScore = 0;
let computerScore = 0;
