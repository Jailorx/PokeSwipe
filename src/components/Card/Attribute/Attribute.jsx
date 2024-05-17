import React from "react";

/**
 * Attribute component to display different types of attributes with specific styles.
 *
 * @param {object} props - Component props
 * @param {string} props.type - The type of the attribute (e.g., "ability" or "types")
 * @param {string} props.value - The value of the attribute to display
 *
 */
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
