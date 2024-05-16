import Logo from "../../assets/pokiswipe-logo.png";

const Navbar = () => {
  return (
    <nav className="h-20 flex justify-around items-center p-2 shadow shadow-bottom">
      <a href="">
        <img src={Logo} alt="pokiswipe_logo" width="200px" />
      </a>
      <div className="flex items-center gap-2 ">
        <a href="https://pokeapi.co/" target="_blank">
          Api Docs
        </a>
        <button>Dark Mode/Light Mode</button>
      </div>
    </nav>
  );
};

export default Navbar;
