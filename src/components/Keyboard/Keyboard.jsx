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
      {allLetters.map((l, i) => {
        const color = usedKeys[l.key];
        return (
          <div
            key={i}
            className={`${styles.key} ${styles[color]}`}
            onClick={() => handleKeyPress(l.key)}
          >
            {l.key.toLocaleUpperCase()}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
