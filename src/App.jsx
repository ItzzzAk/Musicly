import Hero from "./components/Hero";
import Leftbar from "./components/Leftbar";
import Player from "./components/Player";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen flex bg-[#171E31] relative">
        <Leftbar />
        <Hero />
        <Player/>
      </div>
    </>
  );
};

export default App;
