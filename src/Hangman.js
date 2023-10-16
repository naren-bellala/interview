import React, { useState } from "react";
import "./Hangman.css";

export default function Hangman() {
  const solution = "hello".toLowerCase().split("");
  const TotalLives = 2;
  const [lives, setLives] = useState(TotalLives);
  const [inputLetter, setInputLetter] = useState("");
  const [inputWord, setInputWord] = useState(Array(solution.length).fill(""));

  function updateState() {
    const strToArr = solution;
    if (strToArr.includes(inputLetter) && lives) {
      const index = strToArr.indexOf(inputLetter);
      const newArr = [...inputWord];
      strToArr.map((c, i) => {
        if (c === inputLetter) {
          newArr[i] = inputLetter;
        }
        return c;
      });
      newArr[index] = inputLetter;
      setInputWord([...newArr]);
    } else {
      setLives(lives - 1);
    }
    setInputLetter("");
  }

  function handleDown(e) {
    if (e.keyCode === 8) {
      e.preventDefault();
      setInputLetter("");
    } else if (e.keyCode === 13) {
      e.preventDefault();
      updateState();
    }
  }

  return (
    <div className="gameContainer">
      <h1>Hangman game!</h1>
      <div>{lives ? `Lives left:${lives}` : "Sorry you lost"}</div>

      {lives ? (
        <>
          <div className="inputContainer">
            {inputWord.map((c, index) => (
              <div className="dash" key={index}>
                {c}
              </div>
            ))}
          </div>
          <div>
            <label htmlFor="inp">Guess a letter: </label>
            <input
              type="text"
              id="inp"
              value={inputLetter}
              onChange={(e) => setInputLetter(e.target.value)}
              onKeyDown={handleDown}
              maxLength={1}
            />
          </div>
        </>
      ) : (
        <div>
          <p>Game over</p>
          <button
            onClick={() => {
              setLives(TotalLives);
              setInputWord(Array(solution.length).fill(""));
            }}
          >
            reset
          </button>
        </div>
      )}
    </div>
  );
}
