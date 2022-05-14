import React, { useEffect,useState } from 'react'
import { pokemonHome } from '../api/getPokemonTipos';
import { CardPokemon } from './CardPokemon'

export const ContenedorPokemon = () => {

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const pokemons = async () => {
    const data = await pokemonHome();
    const { results } = data;
    setPokemon(results);
    setLoading(false); 
  }

  useEffect(() => {
    pokemons();
  }, []);
  

  return (
    <main className='container ml-72 mb-10'>
      { loading ? null :
        pokemon.map(item =>
          <CardPokemon key={item.name} item={item}/>
         )
      }
    </main>
  )
}
