import React, { useState, useEffect } from "react";
// import { Card } from "react-bootstrap";
import styled from "styled-components";
import Header from "./Header";

const Cards = styled.div`
  width: 12rem;
`;
const Img = styled.img`
  max-width: 300px;
  margin: 0 auto;
`;
const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
  justify-content: center;
  background-color: #ffcb00;
  color: #00428a;
  border: 1px solid #00428a;
  font-weight: 700;
  &:hover {
    background-color: #00428a;
    color: #ffcb00;
    cursor: pointer;
  }
`;

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [generation, setGeneration] = useState(1);
  const [type, setType] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/generation/${generation}/?limit=20`
      );
      const data = await response.json();

      const mapa = {}
      data.pokemon_species.forEach(pk => {mapa[pk.name] = pk})

      setPokemons(data.pokemon_species);
      setType(data.types)
      await data.pokemon_species.reduce(async (previousPromise, pkmn) => {
        await previousPromise
        let pk = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn.name}`)
        let dat = await pk.json()
        mapa[pkmn.name] = {...mapa[pkmn.name], ...dat}
        return Promise.resolve()
      }, Promise.resolve())

      let fullInfo = Object.values(mapa)
      console.log(fullInfo)
    }
    fetchData();
  }, [generation]);

  // useEffect(() => {
  //   async function fetchMipo() {
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${}`);
  //     const data = await response.json();
  //     setType(data);
  //     console.log(data);
  //   }
  //   fetchMipo();
  // }, [])

  return (
    <div className="mipo container">
      <Header setGeneration={setGeneration}/>
      <div className="d-flex justify-content-center flex-wrap">
        {pokemons.map((pokemon) => {
          let id = pokemon.url.split("/")[6];
          return (
            <Cards className="card m-2 shadow" key={pokemon.name}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <p className="card-text">Some description</p>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary w-50"
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary w-50"
                >
                  Add
                </button>
              </div>
            </Cards>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonList;
