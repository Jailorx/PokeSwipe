import HomeButton from "./components/HomeButton/HomeButton";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-gray-400 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <HomeButton placeholder="Play" />
          <HomeButton placeholder="Favorites" />
        </div>
      </main>
    </div>
  );
}

export default App;
