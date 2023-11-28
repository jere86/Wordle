import { useState } from "react";
import { solutions } from "../data/db";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKey] = useState({});
  const [longEnough, setLongEnough] = useState(false);
  const [sameWord, setSameWord] = useState(false);
  const [notAWord, setNotAWord] = useState(false);
  const [shake, setShake] = useState(false);

  // console.log(guesses);

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = currentGuess.map((l) => {
      return { key: l, color: "grey" };
    });

    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });

    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (JSON.stringify(currentGuess) === JSON.stringify(solution)) {
      setIsCorrect(true);
    }

    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess.join("")];
    });

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });

    setUsedKey((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };

      formattedGuess.forEach((l) => {
        const currentColor = newKeys[l.key];

        if (l.color === "green") {
          newKeys[l.key] = "green";
          return;
        }

        if (l.color === "yellow" && currentColor !== "green") {
          newKeys[l.key] = "yellow";
          return;
        }

        if (
          l.color === "grey" &&
          currentColor !== "green" &&
          currentColor !== "yellow"
        ) {
          newKeys[l.key] = "grey";
          return;
        }
      });

      return newKeys;
    });
    setCurrentGuess([]);
  };

  const handleKeyup = ({ key }) => {
    const allowedRegex = /^[A-Za-zČčĆćĐđŠšŽžDŽdžNJnjLJlj]/;

    if (!allowedRegex.test(key)) {
      console.log("je");
      return;
    }

    if (key === "Enter") {
      if (turn > 5) {
        console.log("used all guesses");
        return;
      }

      if (history.includes(currentGuess.join(""))) {
        setShake((prev) => !prev);
        setSameWord((prev) => !prev);
        setTimeout(() => {
          setShake((prev) => !prev);
          setSameWord((prev) => !prev);
        }, 1000);
        return;
      }

      if (currentGuess.length !== 5) {
        setShake((prev) => !prev);
        setLongEnough((prev) => !prev);
        setTimeout(() => {
          setShake((prev) => !prev);
          setLongEnough((prev) => !prev);
        }, 1000);
        return;
      }

      if (
        !solutions.some(
          (solution) => solution.word.join("") === currentGuess.join("")
        )
      ) {
        setShake((prev) => !prev);
        setNotAWord((prev) => !prev);
        setTimeout(() => {
          setShake((prev) => !prev);
          setNotAWord((prev) => !prev);
        }, 1000);
        return;
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (
      (key === "ž" || key === "Ž") &&
      (currentGuess[currentGuess.length - 1] === "d" ||
        currentGuess[currentGuess.length - 1] === "D")
    ) {
      setCurrentGuess((prev) => [...prev.slice(0, -1), "dž"]);
      return;
    }
    if (
      (key === "j" || key === "J") &&
      (currentGuess[currentGuess.length - 1] === "n" ||
        currentGuess[currentGuess.length - 1] === "N")
    ) {
      setCurrentGuess((prev) => [...prev.slice(0, -1), "nj"]);
      return;
    }
    if (
      (key === "j" || key === "J") &&
      (currentGuess[currentGuess.length - 1] === "l" ||
        currentGuess[currentGuess.length - 1] === "L")
    ) {
      setCurrentGuess((prev) => [...prev.slice(0, -1), "lj"]);
      return;
    }
    if (currentGuess.length < 5) {
      setCurrentGuess((prev) => {
        return [...prev, key];
      });
    }
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    handleKeyup,
    shake,
    longEnough,
    sameWord,
    notAWord,
  };
};

export default useWordle;
