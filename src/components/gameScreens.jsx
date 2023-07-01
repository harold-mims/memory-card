/* eslint-disable react/prop-types */
function RoundOverScreen({ round, score, highScore, nextRound }) {
  return (
    <div className="round-over-screen">
      <h2 className="round-over-msg">You made it through round: {round + 1}</h2>
      <div className="score-container">
        <p>Score: {score}</p>
        <p>Highscore: {score > highScore ? (highScore = score) : highScore}</p>
      </div>
      <button onClick={() => nextRound()}>Next Round</button>
    </div>
  );
}

function GameOverScreen({ playerWin, score, highScore, playAgain }) {
  return (
    <div className="game-over-screen">
      <h2 className="game-over-msg">
        {playerWin ? "Congratulations You Win!" : "Game Over"}
      </h2>
      <div className="score-container">
        <p>Score: {score}</p>
        <p>Highscore: {score > highScore ? (highScore = score) : highScore}</p>
      </div>
      <button onClick={playAgain}>Play Again?</button>
    </div>
  );
}

function GameModeSelectScreen({ startGame }) {
  return (
    <div className="game-mode-select-container">
      <div className="game-mode-select-container__how-to-play-container">
        <p className="game-mode-select-container__how-to-play__header">How To Play:</p>
        <p className="game-mode-select-container__how-to-play__description">Click on a card to earn points, but if you click on the same card twice it&apos;s game over <br /> Select a topic Below to begin</p>
      </div>
      <div className="game-mode-select-container__btns">
        <button className="game-mode-btn" onClick={() => startGame("straw-hats")}>
          Straw Hats
        </button>
        <button className="game-mode-btn" onClick={() => startGame("villians")}>
          Antagonists
        </button>
        <button className="game-mode-btn" onClick={() => startGame("devil-fruits")}>
          Devil Fruits
        </button>
      </div>
    </div>
  );
}

export { RoundOverScreen, GameOverScreen, GameModeSelectScreen };
