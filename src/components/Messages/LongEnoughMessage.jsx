import React from "react";
import styles from "./Message.module.scss";

export default function LongEnoughMessage() {
  return (
    <div className={styles.message}>
      <div>
        <h3>NEDOVOLJNO SLOVA</h3>
      </div>
    </div>
  );
}
