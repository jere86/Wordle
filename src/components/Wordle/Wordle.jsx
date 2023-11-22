import React, { useEffect, useState } from "react";
import useWordle from "../../hooks/useWordle";
import styles from "./Wordle.module.scss";

import Grid from "../Grid/Grid";
import Keyboard from "../Keyboard/Keyboard";
import EndMessage from "../Messages/EndMessage";
import LongEnoughMessage from "../Messages/LongEnoughMessage";
import SameWordMessage from "../Messages/SameWordMessage";

export default function Wordle({ solution }) {
  const {
    currentGuess,
    handleKeyup,
    guesses,
    isCorrect,
    turn,
    usedKeys,
    longEnough,
    sameWord,
    shake,
  } = useWordle(solution);
  const [showEndMassage, setShowEndMassage] = useState(false);
  const [showLongEnoughMessage, setShowLongEnoughMessage] = useState(false);
  const [showSameWordMessage, setShowSameWordMessage] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect || turn > 5) {
      setTimeout(() => {
        setShowEndMassage(true);
      }, 2200);
      window.removeEventListener("keyup", handleKeyup);
    }

    if (longEnough === false) {
      setShowLongEnoughMessage(true);
      setTimeout(() => {
        setShowLongEnoughMessage(false);
      }, 1000);
    }

    if (sameWord === true) {
      setShowSameWordMessage(true);
      setTimeout(() => {
        setShowSameWordMessage(false);
      }, 1000);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn, longEnough, sameWord]);

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
        <EndMessage isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
      {showLongEnoughMessage && <LongEnoughMessage />}
      {showSameWordMessage && <SameWordMessage />}
    </div>
  );
}
