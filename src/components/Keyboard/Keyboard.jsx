import React from "react";
import styles from "./Keyboard.module.scss";
import { allLetters } from "../../data/db";

const Keyboard = ({ usedKeys, handleKeyup }) => {
  const handleKeyPress = (key) => {
    if (key === "⏎") {
      let key = "Enter";
      handleKeyup({ key });
    }
    if (key === "⌫") {
      let key = "Backspace";
      handleKeyup({ key });
    }
    handleKeyup({ key });
  };

  return (
    <div className={styles.keyboard}>
      <div className={styles.firstRow}>
        {allLetters.map((l, i) => {
          const color = usedKeys[l.key];
          return (
            i < 11 && (
              <div
                key={i}
                className={`${styles.key} ${styles[color]}`}
                onClick={() => handleKeyPress(l.key)}
              >
                {l.key.toLocaleUpperCase()}
              </div>
            )
          );
        })}
      </div>
      <div className={styles.middleRow}>
        {allLetters.map((l, i) => {
          const color = usedKeys[l.key];
          return (
            10 < i &&
            i < 22 && (
              <div
                key={i}
                className={`${styles.key} ${styles[color]}`}
                onClick={() => handleKeyPress(l.key)}
              >
                {l.key.toLocaleUpperCase()}
              </div>
            )
          );
        })}
      </div>
      <div className={styles.lastRow}>
        {allLetters.map((l, i) => {
          const color = usedKeys[l.key];
          return (
            i > 21 && (
              <div
                key={i}
                className={`${styles.key} ${styles[color]}`}
                onClick={() => handleKeyPress(l.key)}
              >
                {l.key.toLocaleUpperCase()}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
