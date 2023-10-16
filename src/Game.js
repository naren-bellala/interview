import { useState } from "react";

export default function Game() {
  const [square, setSquare] = useState(Array(9).fill(null));

  function getNextMove() {
    return square.filter(Boolean).length % 2 === 0 ? "X" : "O";
  }

  function selectSq(ind) {
    const copySq = [...square];
    copySq[ind] = getNextMove();
    setSquare([...copySq]);
  }

  function renderSq(ind) {
    return (
      <button className="square" onClick={() => selectSq(ind)}>
        {square[ind]}
      </button>
    );
  }

  return (
    <div className="game">
      <div>
        <div className="square-row">
          {renderSq(0)}
          {renderSq(1)}
          {renderSq(2)}
        </div>
        <div className="square-row">
          {renderSq(3)}
          {renderSq(4)}
          {renderSq(5)}
        </div>
        <div className="square-row">
          {renderSq(6)}
          {renderSq(7)}
          {renderSq(8)}
        </div>
      </div>
    </div>
  );
}
