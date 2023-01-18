import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
// import PokemonCard from "./components/PokemonCard";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container-fluid row align-items-center justify-content-center">
      </div> 
      <PokemonList />
      <Footer />
    </>
  );
}

export default App;
