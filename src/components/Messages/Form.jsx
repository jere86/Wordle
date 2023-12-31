import React, { useState } from "react";
import styles from "./Message.module.scss";
import { solutions } from "../../data/db";
import { useNavigate } from "react-router-dom";

export default function Form({ setShowForm }) {
  const navigate = useNavigate();

  const [enteredNumber, setEnteredNumber] = useState("");

  const handleInputChange = (e) => {
    setEnteredNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (1 <= enteredNumber && enteredNumber <= solutions.length) {
      navigate(`/${enteredNumber}`);
      setEnteredNumber("");
      setShowForm((prev) => !prev);
    }
  };

  return (
    <div className={styles.message} onClick={(e) => e.stopPropagation()}>
      <form onSubmit={handleSubmit}>
        <h3>UNESITE # TRAŽENE RIJEČI</h3>
        <div>
          <input
            id="solution number"
            type="number"
            value={enteredNumber}
            onChange={handleInputChange}
            autoFocus
          />
          <button type="submit">
            <svg fill="#000000" viewBox="0 0 14 14">
              <path d="m 13,4.1974 q 0,0.3097 -0.21677,0.5265 l -5.60517,5.6051 -1.0529,1.0529 q -0.21677,0.2168 -0.52645,0.2168 -0.30968,0 -0.52645,-0.2168 L 4.01935,10.329 1.21677,7.5264 Q 1,7.3097 1,7 1,6.6903 1.21677,6.4735 L 2.26968,5.4206 q 0.21677,-0.2167 0.52645,-0.2167 0.30968,0 0.52645,0.2167 l 2.27613,2.2839 5.07871,-5.0864 q 0.21677,-0.2168 0.52645,-0.2168 0.30968,0 0.52645,0.2168 L 12.78323,3.671 Q 13,3.8877 13,4.1974 z"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
