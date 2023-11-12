import React from "react";
import styles from "./EndMessage.module.scss";

export default function EndMessage({ isCorrect, turn, solution }) {
  return (
    <div className={styles.end}>
      {isCorrect && (
        <div>
          <h1>ČESTITAMO!</h1>
          <p>
            Pogodili ste riječ "{solution.toUpperCase()}" u {turn}/6 pokušaja.
          </p>
          <button onClick={() => window.location.reload()}>
            <svg fill="#000000" viewBox="0 0 32 32">
              <path d="M27.1 14.313V5.396L24.158 8.34c-2.33-2.325-5.033-3.503-8.11-3.503C9.902 4.837 4.901 9.847 4.899 16c.001 6.152 5.003 11.158 11.15 11.16 4.276 0 9.369-2.227 10.836-8.478l.028-.122h-3.23l-.022.068c-1.078 3.242-4.138 5.421-7.613 5.421a8 8 0 0 1-5.691-2.359A7.993 7.993 0 0 1 8 16.001c0-4.438 3.611-8.049 8.05-8.049 2.069 0 3.638.58 5.924 2.573l-3.792 3.789H27.1z"></path>
            </svg>
          </button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>NISTE POGODILI RIJEČ!</h1>
          <p>Nestalo Vam je pokušaja.</p>
          <p>Točna riječ je: {solution.toUpperCase()}.</p>
          <button onClick={() => window.location.reload()}>
            <svg fill="#000000" viewBox="0 0 32 32">
              <path d="M27.1 14.313V5.396L24.158 8.34c-2.33-2.325-5.033-3.503-8.11-3.503C9.902 4.837 4.901 9.847 4.899 16c.001 6.152 5.003 11.158 11.15 11.16 4.276 0 9.369-2.227 10.836-8.478l.028-.122h-3.23l-.022.068c-1.078 3.242-4.138 5.421-7.613 5.421a8 8 0 0 1-5.691-2.359A7.993 7.993 0 0 1 8 16.001c0-4.438 3.611-8.049 8.05-8.049 2.069 0 3.638.58 5.924 2.573l-3.792 3.789H27.1z"></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
