import React, { useEffect,useState } from 'react'
import { pokemonHome } from '../api/getPokemonTipos';
import { CardPokemon } from './CardPokemon'

export const ContenedorPokemon = () => {

  const [pokemon, setPokemon] = useState([]);


  const pokemons = async () => {
    const data = await pokemonHome();
    const { results } = data;
    setPokemon(results);
    console.log(results)
  }

  useEffect(() => {
    pokemons();
  }, []);
  

  return (
    <main className='container ml-72 mb-10'>
      {
        pokemon.map(item =>
          <CardPokemon key={item.name} item={item}/>
         )
      }
    </main>
  )
}
