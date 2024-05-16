import React from "react";

const Attribute = ({ type, value }) => {
  return (
    <div
      className={`attribute ${
        type === "ability" ? "bg-custom-blue" : "bg-yellow-600"
      }`}
    >
      {value}
    </div>
  );
};

export default Attribute;
