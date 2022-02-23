import React from "react";

const Box = ({ number, selected, handleSelect }) => {
  return (
    <div
      className={selected ? "boxStyle selectedBox" : "boxStyle"}
      onClick={handleSelect}
    >
      <div className="boxNumber">{number}</div>
    </div>
  );
};

export default Box;
