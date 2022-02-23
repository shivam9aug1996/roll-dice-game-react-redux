import React from "react";

const Dice = ({ rollDice, gameEnd }) => {
  return (
    <>
      <button onClick={rollDice} className="dice-roll">
        {gameEnd ? "Restart Game" : "Roll Dice"}
      </button>
    </>
  );
};

export default Dice;
