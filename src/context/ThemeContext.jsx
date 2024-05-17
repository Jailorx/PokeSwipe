import React, { createContext, useState, useContext } from "react";

// Creating a context for managing theme
const ThemeContext = createContext();

// Provider component for managing theme state and actions
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  //Handles changing of theme
  const handleThemeChange = () => {
    if (theme === "") {
      setTheme("dark");
    } else {
      setTheme("");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

//  Custom hook to consume the ThemeContext
export const useTheme = () => useContext(ThemeContext);
