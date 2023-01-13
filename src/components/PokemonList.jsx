import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      setPokemons(data.results);
    }
    fetchData();
  }, []);

  // console.log(pokemons)

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {pokemons.map((pokemon) => {
        let id = pokemon.url.split("/")[6];
        return (
          <Card className="w-12 m-2" key={pokemon.name}>
            <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default PokemonList;
