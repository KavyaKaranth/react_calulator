import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("0");
    } else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay((prev) => (prev === "0" ? value : prev + value));
    }
  };

  const buttons = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "C", "0", "=",
    "+", "-", "*", "/"
  ];

  return (
    <div className="wrapper">
      <div className="calculator">
        <h2>React Calculator</h2>
        <div className="display">{display}</div>
        <div className="button-grid">
          {buttons.map((btn, idx) => (
            <button key={idx} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
