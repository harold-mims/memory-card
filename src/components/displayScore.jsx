/* eslint-disable react/prop-types */
export default function DisplayScore({ score, highScore }) {
  return (
    <>
      <div className="score-container">
        <p className="score-text">Score: {score}</p>
        <p className="highscore-text">Highscore: {score > highScore ? (highScore = score) : highScore}</p>
      </div>
    </>
  );
}
