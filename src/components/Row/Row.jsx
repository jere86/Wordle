import React from "react";
import styles from "./Row.module.scss";

export default function Row({ guess, currentGuess }) {
  if (guess) {
    return (
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
    let letters = currentGuess.split("");

    return (
      <div className={`${styles.row} ${styles.current}`}>
        {letters.map((letter, i) => (
          <div key={i} className={styles.filled}>
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
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
