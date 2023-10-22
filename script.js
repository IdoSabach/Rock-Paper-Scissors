//game

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function getComputerChoice(){
  const choices = ['rock','paper','scissors'];
  const randomIndex = Math.floor(Math.random()*3);
  return choices[randomIndex];
 }
  

function playRound(playerSelection, computerSelection) {

  if((computerSelection==="paper"&&playerSelection==="scissors") ||
     ( computerSelection==="rock"&&playerSelection==="paper") || 
     (computerSelection==="scissors"&&playerSelection==="rock") ){
      playerScore++;
      roundWinner = 'player'
  }
  else if((computerSelection==="paper"&&playerSelection==="rock") ||
           ( computerSelection==="rock"&&playerSelection==="scissors") || 
           (computerSelection==="scissors"&&playerSelection==="paper") ){
            computerScore++;
            roundWinner = 'computer';
  }
  else{
    roundWinner = 'tie';
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5
}

//UI

const rock = document.querySelector('.choice-rock');
rock.addEventListener('click',()=> game('rock'));

const paper = document.querySelector('.choice-paper');
paper.addEventListener('click',()=> game('paper'));

const scissors = document.querySelector('.choice-scissors');
scissors.addEventListener('click',()=> game('scissors'));

function game(playerChoice){
  if(isGameOver()){
    openEndgameModal()
    return
  }

  const computerChoice = getComputerChoice();
  playRound(playerChoice,computerChoice);
  updateChoices(playerChoice, computerChoice);
  upTextHead();

  if(isGameOver()){
    openEndgameModal();
    setFinalMessage();
  }

}

const updatePlayer = document.querySelector('.block-for-image-player');
const updateComputer = document.querySelector('.block-for-image-computer');

function updateChoices(playerChoice,computerChoice){
  if(playerChoice==='rock'){
    updatePlayer.textContent = '✊'
  }else if(playerChoice==='paper'){
    updatePlayer.textContent = '✋'
  }else{
    updatePlayer.textContent = '✌'
  }

  if(computerChoice==='rock'){
    updateComputer.textContent = '✊'
  }else if(computerChoice==='paper'){
    updateComputer.textContent = '✋'
  }else{
    updateComputer.textContent = '✌'
  }
}


const updateTextHead = document.querySelector('.head');
// const updateTextSubHead = document.querySelector('.sub-head');
const playerScoreUp = document.querySelector('.player-score');
const computerScoreUp = document.querySelector('.computer-score');


function upTextHead(){
  if(roundWinner==='computer'){
    updateTextHead.textContent = 'You lose'
  }else if(roundWinner==='player'){
    updateTextHead.textContent = 'You won'
  }else{
    updateTextHead.textContent = 'Its a die'
  }

  playerScoreUp.textContent = `Player: ${playerScore}`
  computerScoreUp.textContent = `computer: ${computerScore}`
} 


const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')


restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}
function closeEndgameModal() {
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

function setFinalMessage() {
  if(playerScore > computerScore){
    return endgameMsg.textContent = 'You won!'
  }else{
    return endgameMsg.textContent = 'You lost...'
  }
}

function restartGame() {
  playerScore = 0
  computerScore = 0
  updateTextHead.textContent = 'Choose your weapon'
  // scoreMessage.textContent = 'First to score 5 points wins the game'
  playerScoreUp.textContent = 'Player: 0'
  computerScoreUp.textContent = 'Computer: 0'
  updatePlayer.textContent = '?'
  updateComputer.textContent = '?'
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}