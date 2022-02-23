import React, { useEffect, useState } from "react";
import Box from "./Box";
import Dice from "./Dice";

const initialState = [
  { id: 0, number: 3, selected: false },
  { id: 1, number: 1, selected: false },
  { id: 2, number: 6, selected: false },
  { id: 3, number: 2, selected: false },
  { id: 4, number: 5, selected: false },
];

const App = () => {
  const [data, setData] = useState(initialState);
  const [gameEnd, setGameEnd] = useState(false);

  useEffect(() => {
    let firstValue = data[0].number;
    let isGameEnd = data.every((item) => {
      return item.selected === true && item.number === firstValue;
    });
    if (isGameEnd) {
      setGameEnd(true);
    }
  }, [data]);

  const rollDice = () => {
    let newArr = data.map((item, index) => {
      if (item.selected === false) {
        let obj = { ...item, number: Math.ceil(Math.random() * 6) };
        return obj;
      } else {
        return item;
      }
    });
    setData(newArr);
  };

  const handleSelect = (boxNumber) => {
    let arr = data.map((item, index) => {
      if (item.id === boxNumber) {
        return { ...item, selected: !item.selected };
      } else {
        return item;
      }
    });
    let checkIsAllSelected = arr.every((item) => {
      return item.selected === true;
    });
    if (checkIsAllSelected === true) {
    }
    setData(arr);
  };

  const restartGame = () => {
    setData(initialState);
    setGameEnd(false);
  };

  return (
    <>
      <div className="center">
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <br />
        {data.map((item, index) => {
          return (
            <Box
              key={item.id}
              number={data[index].number}
              selected={data[index].selected}
              handleSelect={() => handleSelect(data[index].id)}
            />
          );
        })}
        {gameEnd ? <h1>You Won !!</h1> : null}
        <Dice rollDice={gameEnd ? restartGame : rollDice} gameEnd={gameEnd} />
      </div>
    </>
  );
};

export default App;
