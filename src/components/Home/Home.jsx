import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
const Home = () => {
  const { theme, _ } = useTheme();
  return (
    <main className={`flex-1 flex items-center justify-center ${theme}`}>
      <div className="flex flex-col items-center space-y-4">
        <Link className="homeBtn " to="/game">
          Play
        </Link>
        <Link className="homeBtn " to="/favorites">
          Favorites
        </Link>
      </div>
    </main>
  );
};

export default Home;
