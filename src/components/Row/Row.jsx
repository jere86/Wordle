import React from "react";
import styles from "./Row.module.scss";

export default function Row({
  guess,
  currentGuess,
  shake,
  isCorrect,
  index,
  turn,
}) {
  if (guess) {
    return isCorrect && turn === index ? (
      <div className={`${styles.row} ${styles.solved}`}>
        {guess.map((l, i) => {
          return (
            <div key={i} className={styles[l.color]}>
              {l.key}
            </div>
          );
        })}
      </div>
    ) : (
      <div className={`${styles.row} ${styles.past}`}>
        {guess.map((l, i) => {
          return (
            <div key={i} className={styles[l.color]}>
              {l.key}
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    return (
      <div
        className={`${styles.row} ${styles.current} ${
          shake ? styles.shake : ""
        }`}
      >
        {currentGuess.map((letter, i) => (
          <div key={i} className={styles.filled}>
            {letter}
          </div>
        ))}
        {[...Array(5 - currentGuess.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.row}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
