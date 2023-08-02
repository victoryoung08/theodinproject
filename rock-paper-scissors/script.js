let computerSelection, computer, playerSelection, player;
const userInput = document.querySelector("input");
const inputBtn = document.querySelector("button");
//Get User input on click
const getUserSelection = () => {
  const userSelection = userInput.value;
  const validatedSelection =
    userSelection.charAt(0).toUpperCase() +
    userSelection.slice(1).toLowerCase();
  console.log(validatedSelection);
  return validatedSelection;
};

//Computer randomly selects RPS
const randomChoice = function (selection, user) {
  const randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum <= 1) {
    selection = "Scissors";
  } else if (randomNum <= 2 && randomNum > 1) {
    selection = "Paper";
  } else {
    selection = "Rock";
  }
  console.log(`${user} chose ${selection}`);
  return selection;
};

// Game mechanics win lose
const playRound = function (user, computer) {
  if (
    (user === "Rock" && computer === "Paper") ||
    (user === "Scissors" && computer === "Paper") ||
    (user === "Paper" && computer === "Rock")
  ) {
    console.log(`You win! ${user} beats ${computer}`);
  } else if (user === computer) {
    console.log(`Draw! ${user} and ${computer}`);
  } else {
    console.log(`You lose! ${computer} beats ${user}`);
  }
};

inputBtn.addEventListener("click", function () {
  playRound(getUserSelection(), randomChoice(computerSelection, "computer"));
});
