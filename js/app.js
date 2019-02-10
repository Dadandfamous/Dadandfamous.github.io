// first write cache to the DOM
// this means storing something for future use
// we store these variables to use it later:

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

// randomize computer choice
function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// make winmessage readable
function convertToWord(letter){
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
}

// result after win lose draw
function win(userChoice, computerChoice) {
  // small message on the score  (all variables on top)
  // const smallUserWord = 'user'.fontsize(3).sub();
  // const smallCompWord = 'comp'.fontsize(3).sub();

  const userChoice_div = document.getElementById(userChoice);
  
// score mutation
  userScore++;
  userScore_span.innerHTML = userScore;
// computerscore stays the same, but for clarification:
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}.  You win!`;
// add class of green glow to whatever div you clicked (any userChoice)
  userChoice_div.classList.add('green-glow');

  setTimeout(function() {userChoice_div.classList.remove('green-glow')  }, 800); 
}

function lose(userChoice, computerChoice) {
  // small message on the score  (all variables on top)
  // const smallUserWord = 'user'.fontsize(3).sub();
  // const smallCompWord = 'comp'.fontsize(3).sub();

  const userChoice_div = document.getElementById(userChoice);

// score mutation
  computerScore++;
  userScore_span.innerHTML = userScore;
// computerscore stays the same, but for clarification:
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}.  You lost.`;

  // add class of green glow to whatever div you clicked (any userChoice)
  userChoice_div.classList.add('red-glow');

  setTimeout(function() {userChoice_div.classList.remove('red-glow')  }, 800);
}

function draw(userChoice, computerChoice) {
// all variables stay on top
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallCompWord = 'comp'.fontsize(3).sub();

  const userChoice_div = document.getElementById(userChoice);

// both scores stay the same, no mutation here

  result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}.  Boring! ¯\\_(ツ)_/¯`;

  // add class of green glow to whatever div you clicked (any userChoice)
  userChoice_div.classList.add('gray-glow');

  setTimeout(function() {userChoice_div.classList.remove('gray-glow')  }, 800);
}


// what happens when user chooses xyz
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
    // arguments will be passed on to above 'result after win lose draw'
      win(userChoice, computerChoice);
      break;

    case 'rp':
    case 'ps':
    case 'sr':
       lose(userChoice, computerChoice);
      break;

    case 'rr':
    case 'pp':
    case 'ss':
       draw(userChoice, computerChoice);
      break;
  }
}



function main (){
    // what happens when we click on the buttons
    rock_div.addEventListener('click', function(){
        game('r');
    })

    paper_div.addEventListener('click', function(){
        game('p');
    })

    scissors_div.addEventListener('click', function(){
        game('s');
    })
}

main();
