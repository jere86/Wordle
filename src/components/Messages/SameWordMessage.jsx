import React from "react";
import styles from "./Message.module.scss";

export default function LongEnoughMessage() {
  return (
    <div className={styles.message}>
      <div>
        <h3>UPOTREBLJENA RIJEČ</h3>
      </div>
    </div>
  );
}
