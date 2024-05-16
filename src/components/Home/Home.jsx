import Button from "./Button/Button";

const Home = () => {
  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Button placeholder="Play" />
        <Button placeholder="Favorites" />
      </div>
    </main>
  );
};

export default Home;
