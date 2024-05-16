import React from "react";

const Choice_Button = ({ choice, onClick }) => {
  return (
    <button
      className={`choiceBtn ${
        choice === "Like" ? "bg-green-600" : "bg-red-600"
      }`}
      onClick={onClick}
    >
      {choice}
    </button>
  );
};

export default Choice_Button;
