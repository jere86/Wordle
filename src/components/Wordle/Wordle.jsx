import React, { useEffect, useState } from "react";
import useWordle from "../../hooks/useWordle";
import styles from "./Wordle.module.scss";

import Grid from "../Grid/Grid";
import Keyboard from "../Keyboard/Keyboard";
import EndMessage from "../Messages/EndMessage";
import LongEnoughMessage from "../Messages/LongEnoughMessage";
import SameWordMessage from "../Messages/SameWordMessage";
import NotAWordMessage from "../Messages/NotAWordMessage";

export default function Wordle({ solution, showForm }) {
  const {
    currentGuess,
    handleKeyup,
    guesses,
    isCorrect,
    turn,
    usedKeys,
    longEnough,
    sameWord,
    notAWord,
    shake,
  } = useWordle(solution.word);
  const [showEndMassage, setShowEndMassage] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect || turn > 5) {
      setTimeout(() => {
        setShowEndMassage(true);
      }, 2200);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  useEffect(() => {
    showForm && window.removeEventListener("keyup", handleKeyup);
  }, [showForm, handleKeyup]);

  return (
    <div className={styles.wordle}>
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
        shake={shake}
        isCorrect={isCorrect}
      />
      <Keyboard usedKeys={usedKeys} handleKeyup={handleKeyup} />
      {showEndMassage && (
        <EndMessage
          isCorrect={isCorrect}
          turn={turn}
          solution={solution}
          guesses={guesses}
        />
      )}
      {longEnough && <LongEnoughMessage />}
      {sameWord && <SameWordMessage />}
      {notAWord && <NotAWordMessage />}
    </div>
  );
}
