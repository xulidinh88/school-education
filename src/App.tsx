import { Header } from "./components/main/Header";
import { HomeHero } from "./components/main/HomeHero";

function App() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center ">
        <HomeHero />
      </div>
    </>
  );
}

export default App;
