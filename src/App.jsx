/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { MemoryCard, MemoryGameCards } from "./components/memoryCard";
import { Navbar, Footer } from "./components/boilerPlate";
import { ThousandSunny, Waves } from "./components/background";
import uniqid from "uniqid";
import "./App.css";
import {
  GameModeSelectScreen,
  GameOverScreen,
  RoundOverScreen,
} from "./components/gameScreens";
import MemoryGame from "./components/memoryGame";
import DisplayScore from "./components/displayScore";
import cardDataJSON from "./assets/cards.json";

const cardsPerRound = [3, 5, 8, 13, 21];

let alreadyClicked = [];
let highScore = 0;
let playerWin = false;
let finalRound = false;
let gameMode = "";
let round = 0;
let roundOver = true;
let numCards = 0;

function App() {
  const [score, setScore] = useState(0);
  const [allCards, setAllCards] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const numLoaded = useRef(0);

  /* 
    For the purposes of controlling what is rendered the game state is stored below
    For example when the player is picking their Game Mode the game mode selection 
    screen is shown 

    "gameModeSelect" - pick Game Mode screen
    "playing" - playing the game
    "RoundOverScreen" - Displays when the player reaches the end of the round
    "gameOverScreen" - Displays when the player loses and prompts them to play again.
  */
  const [gameState, setGameState] = useState("gameModeSelect");

  useEffect(() => {
    if (gameState == "playing" && alreadyClicked.length >= allCards.length) {
      if (finalRound) {
        playerWin = true;
        setGameState("gameOverScreen");
        alreadyClicked = [];
      } else if (score >= allCards.length) {
        setGameState("RoundOverScreen");
      }
    }

    if (allCards.length > 0) {
      setAllCards(shuffleCards(allCards));
    }
    if (score > highScore) {
      highScore = score;
    }
  }, [score, gameState, allCards, shuffleCards]);

  function initializeCards() {
    let finalArray = [];
    let cardData;

    switch (gameMode) {
      case "villians":
        cardData = shuffleCards(cardDataJSON.villians);
        break;
      case "devil-fruits":
        cardData = shuffleCards(cardDataJSON.devilfruits);
        break;
      case "straw-hats":
      default:
        cardData = shuffleCards(cardDataJSON.strawhats);
    }

    if (cardsPerRound[round] >= cardData.length) {
      finalRound = true;
      numCards = cardData.length;
    } else {
      numCards = cardsPerRound[round];
    }

    for (let i = 0; i < numCards; i++) {
      finalArray[i] = {
        cardName: cardData[i].name,
        imgSrc: cardData[i].imgUrl,
        id: uniqid(),
        onClick: checkCard,
        onLoad: isFullyLoaded,
      };
    }

    return finalArray;
  }

  function isFullyLoaded() {
    numLoaded.current += 1;

    if (numLoaded.current >= numCards) {
      setIsloading(false);
      numLoaded.current = 0;
    }
  }

  function incScore() {
    setScore((score) => score + 1);
    if (alreadyClicked.length >= allCards.length) {
      roundOver = true;
    }
  }

  /* Fisher-Yates Shuffle */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function shuffleCards(arrayToShuffle) {
    let tempArray = arrayToShuffle;
    let m = arrayToShuffle.length,
      tempVal,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      tempVal = tempArray[m];
      tempArray[m] = tempArray[i];
      tempArray[i] = tempVal;
    }
    return tempArray;
  }

  function checkCard(nameToCheck, cardToAdd) {
    if (alreadyClicked.some((e) => e.cardName === nameToCheck)) {
      setGameState("gameOverScreen");
      alreadyClicked = [];
    } else {
      incScore();
      alreadyClicked = [...alreadyClicked, cardToAdd];
    }
  }

  function startGame(useGameMode) {
    playerWin = false;
    finalRound = false;
    setScore(0);
    round = 0;

    gameMode = useGameMode;

    alreadyClicked = [];
    setAllCards([]);
    setAllCards(initializeCards(0));

    setGameState("playing");
  }

  function playAgain() {
    setIsloading(true);
    setGameState("gameModeSelect");
  }

  function nextRound() {
    setIsloading(true);
    alreadyClicked = [];
    round++;
    setAllCards(initializeCards(round));
    setGameState("playing");
  }

  function renderSwitchScreen() {
    switch (gameState) {
      case "playing":
        return (
          <>
            <MemoryGame
              isLoading={isLoading}
              allCards={allCards}
              gameMode={gameMode}
              score={score}
              highScore={highScore}
            />
            <DisplayScore score={score} highScore={highScore} />
          </>
        );
      case "RoundOverScreen":
        return (
          <RoundOverScreen
            round={round}
            score={score}
            highScore={highScore}
            nextRound={nextRound}
          />
        );

      case "gameOverScreen":
        return (
          <GameOverScreen
            playerWin={playerWin}
            score={score}
            highScore={highScore}
            playAgain={playAgain}
          />
        );

      case "gameModeSelect":
        return <GameModeSelectScreen startGame={startGame} />;
      default:
        return <GameModeSelectScreen />;
    }
  }

  return (
    <>
      <Navbar />
      <div>{renderSwitchScreen()}</div>
      {/* <Footer /> */}
      <Waves />
      <ThousandSunny />
    </>
  );
}

export default App;
