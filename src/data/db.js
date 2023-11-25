import { filtredArray } from "../helpers/splitString";

const solutionsList = () => {
  return filtredArray.map((a, i) => ({ id: i + 1, word: a }));
};

export const solutions = solutionsList();

export const allLetters = [
  { key: "e" },
  { key: "r" },
  { key: "t" },
  { key: "z" },
  { key: "u" },
  { key: "i" },
  { key: "o" },
  { key: "p" },
  { key: "š" },
  { key: "đ" },
  { key: "dž" },
  { key: "a" },
  { key: "s" },
  { key: "d" },
  { key: "f" },
  { key: "g" },
  { key: "h" },
  { key: "j" },
  { key: "k" },
  { key: "l" },
  { key: "č" },
  { key: "ć" },
  { key: "Enter" },
  { key: "c" },
  { key: "v" },
  { key: "b" },
  { key: "n" },
  { key: "nj" },
  { key: "m" },
  { key: "ž" },
  { key: "lj" },
  { key: "⌫" },
];
