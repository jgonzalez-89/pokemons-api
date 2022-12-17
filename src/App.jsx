import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      <div className="container-fluid row align-items-center justify-content-center">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />

      </div>
      <Footer />
    </>
  );
}

export default App;
