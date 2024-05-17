import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext.jsx";

const DarkMode = () => {
  const { theme, handleThemeChange } = useTheme();
  return (
    <div>
      {theme ? (
        <MdOutlineLightMode size={40} onClick={handleThemeChange} />
      ) : (
        <MdOutlineDarkMode
          size={40}
          onClick={handleThemeChange}
          cursor="pointer"
        />
      )}
    </div>
  );
};

export default DarkMode;
