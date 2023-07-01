/* eslint-disable react/prop-types */
function MemoryCard({ cardName, imgSrc, onClick, onLoad, gameMode}) {
  return (
    <button className={"memory-card"} onClick={onClick} >
      <p className="card-title">WANTED</p>
      <img className={"card-image card-image--"+gameMode} src={imgSrc} onLoad={onLoad} />
      <p className="card-name">DEAD OR ALIVE <br />{cardName.toUpperCase()}</p>

    </button>
  );
}

function MemoryGameCards({ allCards, id, gameMode }) {
  return (
    <div className="card-container" key={id}>
      {allCards.map((card) => {
        return (
          <MemoryCard
            key={card.id}
            cardName={card.cardName}
            imgSrc={card.imgSrc}
            gameMode={gameMode}
            onClick={() => card.onClick(card.cardName, card)}
            onLoad={card.onLoad}
          />
        );
      })}
    </div>
  );
}

export { MemoryCard, MemoryGameCards };
