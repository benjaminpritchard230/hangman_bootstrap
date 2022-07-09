const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Create guessedLetters and score variables
let guessedLetters = [];
let score = 0;
let imageId = "images/0.jpg";

// Choose winning word and make array
const word = "falafel";
const wordArray = word.split("");

// Create score display element and put on screen
const scoreDisplay = document.createElement("h3");
const scoreGrid = document.getElementById("score");

// Create grid to display buttons and underscore letters
const buttonGrid = document.getElementById("buttons");
const lettersGrid = document.getElementById("letters");

// Guessed letters element and put on screen
const guessedLettersDisplay = document.createElement("h1");
const guessedLettersDisplayGrid = document.getElementById("guessed");
guessedLettersDisplayGrid.append(guessedLettersDisplay);
guessedLettersDisplay.innerHTML = guessedLetters;

scoreDisplay.innerHTML = `Wrong guesses ${score}`;
scoreGrid.append(scoreDisplay);

// Handle click functions
const handleClick = (e) => {
  if (score < 6) {
    letterClicked = e.target.id;
    revealLetter(letterClicked);
    changeImage();
    document.getElementById(letterClicked).classList.add("disabled")
  } else {
    document.getElementById(
      "ending"
    ).innerHTML = `You have run out of attempts! The word was "${word}".`;
  }
};

//   Create buttons
for (let index = 0; index < letters.length; index++) {
  const button = document.createElement("button");
  button.innerHTML = letters[index];
  button.id = letters[index];
  button.classList.add("btn", "btn-primary")
  buttonGrid.append(button);
  button.addEventListener("click", handleClick);
}

// Create and display underscores
for (let index = 0; index < wordArray.length; index++) {
  const underscore = document.createElement("h1");
  underscore.innerHTML = "  _  ";
  lettersGrid.append(underscore);
  underscore.setAttribute("style", "display:inline;");
  underscore.className = wordArray[index];
}

// Reveal letters function

const revealLetter = (e) => {
  if (wordArray.includes(e)) {
    let items = document.getElementsByClassName(e),
      i,
      len;
    for (i = 0, len = items.length; i < len; i++) {
      items[i].innerHTML = e;
    }
  } else if (guessedLetters.includes(e)) {
  } else {
    score++;
    scoreDisplay.innerHTML = score;
    guessedLetters.push(e);
    guessedLettersDisplay.innerHTML = guessedLetters;
  }
};

const changeImage = () => {
  document.getElementById("image").src = "images/" + score + ".jpg";
};
