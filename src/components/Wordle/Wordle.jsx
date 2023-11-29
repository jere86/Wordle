import React, { useEffect, useState } from "react";
import useWordle from "../../hooks/useWordle";
import styles from "./Wordle.module.scss";

import Grid from "../Grid/Grid";
import Keyboard from "../Keyboard/Keyboard";
import EndMessage from "../Messages/EndMessage";
import LongEnoughMessage from "../Messages/LongEnoughMessage";
import SameWordMessage from "../Messages/SameWordMessage";
import NotAWordMessage from "../Messages/NotAWordMessage";

export default function Wordle({ solution, showForm, setDisableButton }) {
  const {
    handleKeyup,
    currentGuess,
    setCurrentGuess,
    guesses,
    setGuesses,
    isCorrect,
    setIsCorrect,
    turn,
    setTurn,
    usedKeys,
    longEnough,
    sameWord,
    notAWord,
    shake,
    setHistory,
    setUsedKey,
  } = useWordle(solution.word);
  const [showEndMassage, setShowEndMassage] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    if (turn > 0) {
      setDisableButton(true);
    }

    if (isCorrect || turn > 5) {
      setTimeout(() => {
        setShowEndMassage(true);
      }, 2200);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [setDisableButton, handleKeyup, isCorrect, turn]);

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
          solution={solution}
          turn={turn}
          setTurn={setTurn}
          guesses={guesses}
          setGuesses={setGuesses}
          isCorrect={isCorrect}
          setIsCorrect={setIsCorrect}
          setHistory={setHistory}
          setUsedKey={setUsedKey}
          setCurrentGuess={setCurrentGuess}
          setShowEndMassage={setShowEndMassage}
          setDisableButton={setDisableButton}
        />
      )}
      {longEnough && <LongEnoughMessage />}
      {sameWord && <SameWordMessage />}
      {notAWord && <NotAWordMessage />}
    </div>
  );
}
