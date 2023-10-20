

function getComputerChoice(){
  const choices = ['rock','paper','scissors'];
  const randomIndex = Math.floor(Math.random()*3);
  return choices[randomIndex];
 }
 
 
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if((computerSelection==="paper"&&playerSelection==="scissors") ||
     ( computerSelection==="rock"&&playerSelection==="paper") || 
     (computerSelection==="scissors"&&playerSelection==="rock") ){
    return 1;
  }else if((computerSelection==="paper"&&playerSelection==="rock") ||
           ( computerSelection==="rock"&&playerSelection==="scissors") || 
           (computerSelection==="scissors"&&playerSelection==="paper") ){
    return 2
  }else{
    return 3;
  }
}


function game(){
  
  let playScore = 0;
  let computerScore = 0;

  for(let i=0;i<100;i++){
    
    let playerChoice = prompt("What's your choice?");
    let computerChoice = getComputerChoice();

    console.log("player choice: " + playerChoice + " vs " + "computer choice " + computerChoice);


    let num = playRound(playerChoice,computerChoice);
    
    if(playScore <5 && computerScore<5){
      if (num===1){
        playScore++;
      }else if(num===2){
        computerScore++;
      }else{
        console.log("Draw!")
      }
    }else if(playScore===5){
      console.log("you big win");
      break;
    }
    else{
      console.log("Computer wins!");
      break;
    }
    console.log("your score: " + playScore);
    console.log("computer score: " + computerScore);

  }

}
game();
