import Logo from "../../assets/pokeswipe-logo.png";

import { Link } from "react-router-dom";

import DarkMode from "./DarkMode/DarkMode";
import { useTheme } from "../../context/ThemeContext";

/**
 *
 * Header Components displays navbar
 *
 */

const Navbar = () => {
  //Accessing data from ThemeContext
  const { theme } = useTheme();

  return (
    <nav
      className={`h-20 flex justify-around items-center p-2 shadow-lg ${theme}`}
    >
      <Link to="/">
        <img src={Logo} alt="pokiswipe_logo" width="200px" />
      </Link>
      <DarkMode />
    </nav>
  );
};

export default Navbar;
