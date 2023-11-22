import React, { useEffect, useState } from "react";
import Wordle from "./components/Wordle/Wordle";
import styles from "./App.module.scss";
import { solutions } from "./data/db";

const App = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const randomSolution =
      solutions[Math.floor(Math.random() * solutions.length)];
    setSolution(randomSolution.word);
  }, [setSolution]);

  return (
    <div className={styles.game}>
      <h1>
        WORDLE <span>HR</span>
      </h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
};

export default App;
