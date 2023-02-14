const computerHand = [
  {
    name: "rock",
    imageSource: "./photos/rock copie.webp",
  },
  {
    name: "paper",
    imageSource: "./photos/feuille copie.webp",
  },
  {
    name: "scissors",
    imageSource: "./photos/scissor copie.webp",
  },
];
const playerHand = [
  {
    name: "rock",
    imageSource: "./photos/rock copie 2.webp",
  },
  {
    name: "paper",
    imageSource: "./photos/feuille copie 2.webp",
  },
  {
    name: "scissors",
    imageSource: "./photos/scissor copie 2.webp",
  },
];

let choiceComputer;
let choicePlayer;
let scoreP = 0;
let scoreC = 0;

/************************************* function ************************************************************************/

function decideWinner(player, computer) {
  if (
    (player == "paper" && computer == "rock") ||
    (player == "rock" && computer == "scissors") ||
    (player == "scissors" && computer == "paper")
  ) {
    scoreP++;
    logger("Player wins !");
  } else if (
    (computer == "paper" && player == "rock") ||
    (computer == "rock" && player == "scissors") ||
    (computer == "scissors" && player == "paper")
  ) {
    scoreC++;
    logger("Computer wins !");
  } else {
    logger("Draw");
  }
}

function ramdomComputerChoice() {
  let rand = Math.floor(Math.random() * 3);
  choiceComputer = computerHand[rand].name;
  let choiceImgCom = computerHand[rand].imageSource;
  let imgComputer = document.querySelector(".game  .computer  img");
  imgComputer.src = computerHand[0].imageSource;
  setTimeout(() => {
    imgComputer.src = choiceImgCom;
  }, 1000);
}

function play(choice) {
  choicePlayer = playerHand[choice].name;
  let choiceImgPlayer = playerHand[choice].imageSource;
  let ImgPlayer = document.querySelector(".game .player img"); // .game .player img
  document.querySelector(".game .player").classList.add("moveAnimationP");
  document.querySelector(".game .computer").classList.add("moveAnimationC");
  ImgPlayer.src = playerHand[0].imageSource;
  ramdomComputerChoice();
  setTimeout(() => {
    document.querySelector(".game .player").classList.remove("moveAnimationP");
    document
      .querySelector(".game .computer")
      .classList.remove("moveAnimationC");
    decideWinner(choicePlayer, choiceComputer);
    displayScore(scoreP, scoreC);
    endGame();
    ImgPlayer.src = choiceImgPlayer;
  }, 1000);
}

function logger(msg) {
  let chatDisplay = document.querySelector("nav span");
  chatDisplay.innerHTML = msg;
}

function displayScore(score1, score2) {
  console.log(score1, score2);
  let scoreDisplayP = document.querySelector("nav .scorePlay");
  scoreDisplayP.innerHTML = score1;

  let scoreDisplayC = document.querySelector("nav .scoreCom");
  scoreDisplayC.innerHTML = score2;
}

function endGame() {
  if (scoreP >= 5) {
    scoreC = 0;
    scoreP = 0;
    document.querySelector(".youWin").style.display = "block";
    setTimeout(() => {
      document.querySelector(".youWin").style.display = "none";
    }, 2000);
  } else if (scoreC >= 5) {
    scoreC = 0;
    scoreP = 0;
    document.querySelector(".gameOver").style.display = "block";
    setTimeout(() => {
      document.querySelector(".gameOver").style.display = "none";
    }, 2000);
  }
  displayScore(scoreP, scoreC);
}
