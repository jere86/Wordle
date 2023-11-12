import React from "react";
import Row from "../Row/Row";
import styles from "./Grid.module.scss";

export default function Grid({ currentGuess, guesses, turn }) {
  return (
    <div className={styles.grid}>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />;
        }
        return <Row key={i} guess={g} />;
      })}
    </div>
  );
}
