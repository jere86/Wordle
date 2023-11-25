import React from "react";
import styles from "./Message.module.scss";

export default function NotAWordMessage() {
  return (
    <div className={styles.message}>
      <div>
        <h3>NIJE NA POPISU RIJEČI</h3>
      </div>
    </div>
  );
}
