import "./toggle.css";
import React from "react";
const toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check"> Mode</label>
    </div>
  );
};
export default toggle;
