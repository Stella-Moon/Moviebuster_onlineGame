// Game
const thor = document.getElementById("thor");
const blitz = document.getElementById("blitz");
let score = document.getElementById("score");
const highscore = document.getElementById("highscore");
const startbutton = document.getElementById("startbutton");
const about_game = document.getElementById("about-game");
const best_score = document.getElementById("best-score");
const gameOver = document.getElementById("game-over");
const startScreen = document.getElementById("start-screen");
const scoreCount = document.getElementById("scoreCount");
const background = document.getElementById("background");
const restartButton = document.getElementById("restartbutton");
const bonustext = document.getElementById("bonustext");
let herzcount = document.getElementById("bonuspoints");
const music = document.getElementById("audio");
const pling = document.getElementById("pling");
let gameLoopInterval = 0
let finalScore = 0;
let bonuspoints = 0;




// Funktionsdeklaration

const startGame = () => {
  gameOver.style.display = "none";
  background.classList.add("bg-animation")
  blitz.style.display = "block";
  blitz.classList.add("blitz-animation")
  startScreen.style.display = "none"
  score.style.display = "block"
  bonustext.style.display = "block"
  herz.classList.add("herzAnimation");
  restartButton.style.display = "none";
  resetScore()
  startGameLoop()
  music.play()
  music.loop = true;
}


const resetScore = () => { 
  score.innerText = 0
  bonuspoints = 0;
  herzcount.innerText = 0;
}


const dieAnimation = () => {
  thor.classList.add("death")
  return new Promise(resolve => setTimeout(() => {
    thor.classList.remove("death")
    resolve()
  }, 500));

}

function jump() {
  thor.classList.add("jump-animation");
  setTimeout(() =>
    thor.classList.remove("jump-animation"), 700);
    
}

document.addEventListener('keypress', (event) => {
  if (!thor.classList.contains('jump-animation')) {
    jump();
  }
})

// Gamestop 

const stopGame = async () => {
  await dieAnimation()
  audio.pause()

     const scoreNumber = parseInt(score.innerText);
       const highscoreNumber = parseInt(highscore.innerText);
        bonuspoints = parseInt(bonuspoints);
              
   
    score.style.display = "none";
    gameOver.style.display = "block";
  
  background.classList.remove("bg-animation")
  blitz.classList.remove("blitz-animation")
  restartButton.style.display = "block";
  bonustext.style.display = "none";
  gameLoopInterval = clearInterval(gameLoopInterval)
  finalScore = scoreNumber + bonuspoints;
  if (finalScore > highscoreNumber) { highscore.innerText = finalScore; } 
  // scoreCount.innerText = "Sie haben einen Score von " + scoreNumber + " erreicht. Ihr Highscore ist: " + highscoreNumber + "Total " + finalScore;
 scoreCount.innerText = "Sie haben einen Score von " + finalScore + " erreicht! Ihr Highscore ist " + highscoreNumber;
  herz.classList.remove("herzAnimation")
}

const randomizeHerzAnimation = (herzLeft) => {
  const max = 3;
  const min = 1;
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  if (herzLeft === 520) {
    herz.style.animationName = "herz" + random;
  }
};

// Game details
const startGameLoop = () => {

gameLoopInterval = window.setInterval(() => {
  const thorTop = parseInt(window.getComputedStyle(thor)
    .getPropertyValue('top'));
  const blitzLeft = parseInt(window.getComputedStyle(blitz)
    .getPropertyValue('left'));
    const herzLeft = parseInt(window.getComputedStyle(herz)
      .getPropertyValue('left'))
    const herzTop = parseInt(window.getComputedStyle(herz)
      .getPropertyValue('top'))

      randomizeHerzAnimation(herzLeft)
      score.innerText++;

  if (blitzLeft < 0) { blitz.style.display = 'none'; } 
  else { blitz.style.display = '' }

  if (herzLeft < 0) {  herz.style.display = 'none' } 
  else { herz.style.display = '' }

  if (herzLeft < 50 && thorTop < (herzTop + 50)) {
    thor.classList.add("herzCollect");
    setTimeout(() =>
    thor.classList.remove("herzCollect"), 300);
    pling.play();
    herz.style.display = 'none'
    bonuspoints = bonuspoints + 100;
    herzcount.innerText = Number(herzcount.innerText) + 100;
   
  }

  if (blitzLeft < 50 && blitzLeft > 0 && thorTop > 150) { stopGame(); }
 
  }, 50);

}



startbutton.addEventListener('click', (event) => {
  if (!gameLoopInterval) { startGame()  }
  else {
    if (!thor.classList.contains('jump-animation')) {
      jump()
    }
  }

})

restartButton.addEventListener('click', (event) => {
  if (!gameLoopInterval) { startGame()  }
  else {
    if (!thor.classList.contains('jump-animation')) {
      jump()
    }
  }

})


/* console log für error*/