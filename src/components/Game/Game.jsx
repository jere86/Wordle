import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./Game.module.scss";

import Wordle from "../Wordle/Wordle";
import Form from "../Messages/Form";

import { solutions } from "../../data/db";

const viewportHeight =
  window.innerHeight || document.documentElement.clientHeight;
const toolbarHeight = window.outerHeight - window.innerHeight;

const usableHeight = viewportHeight - toolbarHeight;

const Game = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [solution, setSolution] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const searchId = parseInt(id) || Math.floor(Math.random() * solutions.length);

  useEffect(() => {
    setSolution(solutions[searchId - 1]);

    navigate(`/${searchId}`);
  }, [searchId, navigate]);

  return (
    <div
      className={styles.game}
      style={{ height: usableHeight }}
      onClick={() => setShowForm(false)}
    >
      <div className={styles.header} onClick={(e) => e.stopPropagation()}>
        <h1>
          WORDLE <span>HR</span>
        </h1>
        <button
          onClick={() => {
            setShowForm((prev) => !prev);
          }}
          disabled={disableButton}
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3865 1.78527C10.9354 1.84626 11.331 2.34067 11.27 2.88958L10.7299 7.74999H14.2146L14.7853 2.6135C14.8463 2.0646 15.3407 1.66906 15.8896 1.73005L16.3865 1.78527C16.9354 1.84626 17.331 2.34067 17.27 2.88958L16.7299 7.74999H20.25C20.8023 7.74999 21.25 8.19771 21.25 8.74999V9.24999C21.25 9.80228 20.8023 10.25 20.25 10.25H16.4522L16.0633 13.75H20.25C20.8023 13.75 21.25 14.1977 21.25 14.75V15.25C21.25 15.8023 20.8023 16.25 20.25 16.25H15.7855L15.2148 21.3865C15.1538 21.9354 14.6594 22.331 14.1105 22.27L13.6135 22.2148C13.0646 22.1538 12.6691 21.6594 12.7301 21.1104L13.2701 16.25H9.7855L9.21477 21.3865C9.15378 21.9354 8.65936 22.331 8.11045 22.27L7.61351 22.2148C7.06461 22.1538 6.66907 21.6594 6.73006 21.1104L7.27011 16.25H3.75C3.19772 16.25 2.75 15.8023 2.75 15.25V14.75C2.75 14.1977 3.19772 13.75 3.75 13.75H7.54789L7.93678 10.25H3.75C3.19772 10.25 2.75 9.80228 2.75 9.24999V8.74999C2.75 8.19771 3.19772 7.74999 3.75 7.74999H8.21456L8.78528 2.6135C8.84627 2.0646 9.34068 1.66906 9.88959 1.73005L10.3865 1.78527ZM13.5479 13.75L13.9368 10.25H10.4522L10.0633 13.75H13.5479Z"
              fill="gray"
            ></path>
          </svg>
          <p>{searchId}</p>
        </button>
      </div>
      {solution && (
        <Wordle
          solution={solution}
          showForm={showForm}
          setDisableButton={setDisableButton}
        />
      )}
      {showForm && <Form setShowForm={setShowForm} />}
    </div>
  );
};

export default Game;
