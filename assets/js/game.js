// Game
const thor = document.getElementById("thor");
const blitz = document.getElementById("blitz");
let score = document.getElementById("score");
const highscore = document.getElementById("highscore");


const restartGame = () => {
  const scoreNumber = parseInt(score.innerText);
  /* const highscoreNumber = parseInt(highscore.innerText);
   if (scoreNumber > highscoreNumber) {
     highscore.innerText = scoreNumber;
   } */

  score.innerText = 0;


}

function jump() {
  thor.classList.add("jump-animation");
  setTimeout(() =>
    thor.classList.remove("jump-animation"), 1200);
}

document.addEventListener('keypress', (event) => {
  if (!thor.classList.contains('jump-animation')) {
    jump();
  }
})

window.setInterval(() => {
  const thorTop = parseInt(window.getComputedStyle(thor)
    .getPropertyValue('top'));
  const blitzLeft = parseInt(window.getComputedStyle(blitz)
    .getPropertyValue('left'));
  score.innerText++;


  if (blitzLeft < 0) {
    blitz.style.display = 'none';
  } else {
    blitz.style.display = ''
  }

  if (blitzLeft < 75 && blitzLeft > 0 && thorTop > 90) {


    restartGame();


    thor.classList.add("death");
    setTimeout(() =>
      thor.classList.remove("death"), 300);

    /*alert("You got a score of: " + score.innerText +
        "\n\nPlay again?");
      location.reload(); */
  }
}, 50);
