import React from "react";
import "./Buttons.css";
const Buttons = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="buttons"
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Buttons;
