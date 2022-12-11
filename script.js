const alphabet = [
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
const body = document.querySelector("body");

let startingGuesses = 27;

const guessesEl = document.querySelector("#guesses");
guessesEl.textContent = 27;
const randomWord = alphabet[Math.floor(Math.random() * 27)];
console.log(randomWord);
let wordToGuess = "";
for (let i = 0; i < randomWord.length; i++) {
  wordToGuess += "_";
}
const wordEl = document.querySelector("#word");
wordEl.textContent = wordToGuess;

document.body.addEventListener("keyup", function (event) {
  const letterIndex = randomWord.indexOf(event.key);
  console.log(letterIndex);
  if (letterIndex === -1) {
    startingGuesses--;
    guessesEl.textContent = startingGuesses;
  } else {
    let wordArray = wordToGuess.split("");
    for (let i = 0; i < wordToGuess.length; i++) {
      if (randomWord[i] === event.key) {
        wordArray[i] = randomWord[i];
        const hTag = document.createElement("h4");
        hTag.textContent = "You guessed the secret letter!";
        body.appendChild(hTag);
      }
    }
    wordToGuess = wordArray.join("");
    wordEl.textContent = wordToGuess;

    if (letterIndex === 0) {
      const randomWord = alphabet[Math.floor(Math.random() * 27)];
      console.log(randomWord);
      let wordToGuess = "";
      for (let i = 0; i < randomWord.length; i++) {
        wordToGuess += "_";
        let wordArray = wordToGuess.split("");
        for (let i = 0; i < wordToGuess.length; i++) {
          if (randomWord[i] === event.key) {
            wordArray[i] = randomWord[i];
            const hTag = document.createElement("h4");
            hTag.textContent = "You guessed the secret letter!";
            body.appendChild(hTag);
          }
        }
      }
    }
  }
});
