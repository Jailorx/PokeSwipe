import Logo from "../../assets/pokeswipe-logo.png";

import { Link } from "react-router-dom";

import DarkMode from "./DarkMode";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, _ } = useTheme();
  return (
    <nav
      className={`h-20 flex justify-around items-center p-2 shadow shadow-bottom ${theme}`}
    >
      <Link to="/">
        <img src={Logo} alt="pokiswipe_logo" width="200px" />
      </Link>
      <div className="flex items-center gap-2 ">
        {/*DarkMode Button */}
        <div>
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
