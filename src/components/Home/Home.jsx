import HomeButton from "../HomeButton/HomeButton";

const Home = () => {
  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <HomeButton placeholder="Play" />
        <HomeButton placeholder="Favorites" />
      </div>
    </main>
  );
};

export default Home;
