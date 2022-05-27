// Game
const ship = document.getElementById("ship");
const rock = document.getElementById("rock");
let score = document.getElementById("score");
const highscore = document.getElementById("highscore");


const restartGame = () => {
  const scoreNumber = parseInt(score.innerText);
  const highscoreNumber = parseInt(highscore.innerText);
  if (scoreNumber > highscoreNumber) {
    highscore.innerText = scoreNumber;
  }

  score.innerText = 0;

 
}

function jump() {
  ship.classList.add("jump-animation");
  setTimeout(() =>
    ship.classList.remove("jump-animation"), 1200);
}

document.addEventListener('keypress', (event) => {
  if (!ship.classList.contains('jump-animation')) {
    jump();
  }
})

window.setInterval(() => {
  const shipTop = parseInt(window.getComputedStyle(ship)
    .getPropertyValue('top'));
  const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
  score.innerText++;
 

  if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = ''
  }

  if (rockLeft < 75 && rockLeft > 0 && shipTop > 90) {


    restartGame();


    ship.classList.add("death");
    setTimeout(() =>
      ship.classList.remove("death"), 300);

    /*alert("You got a score of: " + score.innerText +
        "\n\nPlay again?");
      location.reload(); */
  }
}, 50);
