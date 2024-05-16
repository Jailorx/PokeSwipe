import Logo from "../../assets/pokiswipe-logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-20 flex justify-around items-center p-2 shadow shadow-bottom">
      <Link to="#">
        <img src={Logo} alt="pokiswipe_logo" width="200px" />
      </Link>
      <div className="flex items-center gap-2 ">
        <Link to="https://pokeapi.co/" target="_blank">
          Api Docs
        </Link>
        <button>Dark Mode/Light Mode</button>
      </div>
    </nav>
  );
};

export default Navbar;
