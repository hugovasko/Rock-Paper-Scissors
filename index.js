function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;
  let computerChoice = "";

  if (random === 1) {
    computerChoice = "rock";
  } else if (random === 2) {
    computerChoice = "paper";
  } else if (random === 3) {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function playerPlay() {
  let playerChoice = "";
  playerChoice = prompt('Select between: "Rock", "Paper" and "Scissors"');
  playerChoice =  playerChoice.toLowerCase();

  return playerChoice;
}

function playRound() {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();

  let log = "";

  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      log = "You Lose! Paper beats Rock";
    } else if (computerSelection == "sissors") {
      log = "You Win! Rock beats Scissors";
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      log = "You Lose! Scissors beats Paper";
    } else if (computerSelection == "rock") {
      log = "You Win! Paper beats Rock";
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      log = "You Lose! Rock beats Scissors";
    } else if (computerSelection == "paper") {
      log = "You Win! Scissors beats Paper";
    } else {
      log = "It's a tie";
    }
  }

  return log;

  // let result = "";

  // if(playerSelection === computerSelection){
  //     result = "Draw";
  // }else if(playerSelection === "rock" && computerSelection === "scissors"){
  //     result = "You Won1!";
  // }else if(playerSelection === "rock" && computerSelection === "paper"){
  //     result = "Computer Won1!";
  // }else if(playerSelection === "paper" && computerSelection === "rock"){
  //     result = "You Won2!";
  // }else if(playerSelection === "paper" && computerSelection === "scissors"){
  //     result = "Computer Won2!";
  // }else if(playerSelection === "scissors" && computerSelection === "paper"){
  //     result = "You Won3!";
  // }else if(playerSelection === "scissors" && computerSelection === "rock"){
  //     result = "Computer Won3!";
  // }

  // return result;
}

// console.log(`Your choise is ${playerPlay()} and computer's choice is ${computerPlay()} so ${playRound()}`)

console.log(playRound());
