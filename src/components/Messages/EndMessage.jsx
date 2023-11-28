import React from "react";
import styles from "./Message.module.scss";

export default function EndMessage({ isCorrect, turn, solution, guesses }) {
  const text = `bit.ly/worlde_hr #${solution.id} ${
    isCorrect ? `${turn}/6` : "X/6"
  }\n\n${guesses
    .filter((word) => word !== undefined)
    .map((word) =>
      word
        .map((letter) => {
          if (letter.color === "grey") {
            return "⬛";
          } else if (letter.color === "yellow") {
            return "🟨";
          } else if (letter.color === "green") {
            return "🟩";
          } else return "";
        })
        .join("")
    )
    .join("\n")}`;

  const handleShare = (text) => {
    const encodedText = encodeURIComponent(text);
    const whatsappLink = `whatsapp://send?text=${encodedText}`;
    window.open(whatsappLink);
  };

  return (
    <div className={styles.message} style={{ width: "80%" }}>
      <div>
        {isCorrect ? (
          <>
            <h2>ČESTITAMO!</h2>
            <p>
              Pogodili ste riječ <b>#{solution.id}</b>
              <br />u <b>{turn}/6</b> pokušaja.
            </p>
          </>
        ) : (
          <>
            <h2>NISTE POGODILI!</h2>
            <p>
              Točna riječ je <b>"{solution.word.join("").toUpperCase()}"</b>.
            </p>
          </>
        )}
        <div className={styles.buttons}>
          <button onClick={() => window.location.reload()}>
            <svg fill="#000000" viewBox="3 2 26 26">
              <path d="M27.1 14.313V5.396L24.158 8.34c-2.33-2.325-5.033-3.503-8.11-3.503C9.902 4.837 4.901 9.847 4.899 16c.001 6.152 5.003 11.158 11.15 11.16 4.276 0 9.369-2.227 10.836-8.478l.028-.122h-3.23l-.022.068c-1.078 3.242-4.138 5.421-7.613 5.421a8 8 0 0 1-5.691-2.359A7.993 7.993 0 0 1 8 16.001c0-4.438 3.611-8.049 8.05-8.049 2.069 0 3.638.58 5.924 2.573l-3.792 3.789H27.1z"></path>
            </svg>
            PONOVI
          </button>
          <hr />
          <button onClick={() => handleShare(text)}>
            <svg fill="#000000" viewBox="0 0 16 16">
              <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
              <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
            </svg>
            PODIJELI
          </button>
        </div>
      </div>
    </div>
  );
}
