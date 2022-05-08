import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { pokemonsPorTipo } from '../api/getPokemonTipos';
import { CardPokemon } from './CardPokemon'

export const Tipos = () => {

  const {tipo} = useParams();  

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const pokemonsTipo = async () => {
    const res = await pokemonsPorTipo(tipo);
    // const [pokemon] = res;
    setPokemons(res);
   
  }

 

  useEffect(() => {
    pokemonsTipo();
  }, [tipo]);
  

  return (
    <main className='container ml-72 mb-10'>
      { 
        pokemons.map(item =>
          <CardPokemon key={item.pokemon.name} item={item.pokemon}/>
         )
      }
    </main>
  )
}
