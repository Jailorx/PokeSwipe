import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  const handleThemeChange = () => {
    const root = document.getElementById("root");
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

export const useTheme = () => useContext(ThemeContext);
