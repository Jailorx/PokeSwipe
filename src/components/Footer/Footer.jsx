import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

/**
 *
 * Footer Component displays Creator's information
 *
 */
const Footer = () => {
  //Accessing data from ThemeContext
  const { theme } = useTheme();

  //Calculate Current Year
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${theme}`}>
      <div className="container">
        <p className="text-center ">
          Created by{" "}
          <Link
            to="https://github.com/Jailorx"
            target="_blank"
            className="hover:text-blue-400"
          >
            Shubham Bisht
          </Link>
        </p>
        <p className="text-center">&copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
