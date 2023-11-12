import React, { useEffect, useState } from "react";
import useWordle from "../../hooks/useWordle";
import Grid from "../Grid/Grid";
import styles from "./Wordle.module.scss";
import Keyboard from "../Keyboard/Keyboard";
import EndMessage from "../EndMessage/EndMessage";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => {
        setShow(true);
      }, 2000);
      window.removeEventListener("keyup", handleKeyup);
    }
    if (turn > 5) {
      setTimeout(() => {
        setShow(true);
      }, 2000);

      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <div className={styles.wordle}>
      <hr />
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keyboard usedKeys={usedKeys} handleKeyup={handleKeyup} />
      {show && (
        <EndMessage isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  );
}
