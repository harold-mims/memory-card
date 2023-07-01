/* eslint-disable react/prop-types */
import { MemoryGameCards } from "./memoryCard";
import LoadingScreen from "./loading";
import uniqid from "uniqid";

export default function MemoryGame({isLoading, allCards, gameMode}) {
  return (
    <>
      <div style={{ display: isLoading ? null : "none" }}>
        <LoadingScreen />
      </div>
      <div style={{ display: isLoading ? "none" : null }}>
        <div className="memory-game-container">
          <MemoryGameCards allCards={allCards} id={uniqid()} gameMode={gameMode} />
        </div>
      </div>
    </>
  );
}
