import React from "react";

/**
 * Choice_Button component provides different choice for user.
 *
 * @param {object} props - Component props
 * @param {string} props.choice - The type of Choice (e.g. "Like" or "Dislike")
 * @param {string} props.onClick - Function for clicking the button
 *
 */

const Choice_Button = ({ choice, onClick }) => {
  return (
    <button
      className={`choiceBtn  transform transition-transform duration-300 hover:scale-110 ${
        choice === "Like" ? "bg-green-600" : "bg-red-600"
      }`}
      onClick={onClick}
    >
      {choice}
    </button>
  );
};

export default Choice_Button;
