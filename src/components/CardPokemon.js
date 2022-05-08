import React,{ useEffect, useState } from 'react'
import { getPokemon } from '../api/getPokemonTipos';
import { ProgressBar } from './ProgressBar';

export const CardPokemon = ({item}) => {

  console.log(item)
  useEffect(() => {
    pokemons();
  }, [])

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const pokemons = async () => {
    const data = await getPokemon(item.url);
    const  res = data;
    setPokemon(res);
    setLoading(false);
  }

 

  return (
    <article className='h-52 mt-10 grid grid-cols-2 items-cente'>
       <figure className='mx-auto drop-shadow-md bg-blanco   min-w-[66%]  w-6/6 h-52 rounded-lg p-4 col-span-1'>
        <div className='flex  -translate-y-8 '>
        <div className='bg-blanco drop-shadow-md w-16 h-16 rounded-full flex items-center text-center justify-center -left-10 absolute'>{(pokemon.height/10)}m</div>
        <div className='bg-blanco drop-shadow-md w-16 h-16 rounded-full flex items-center text-center justify-center -right-10 absolute'>{(pokemon.weight/10)}kg</div>
        </div>
      { loading ? <h1> Cargando... </h1> :(
        <div className='w-full flex flex-row items-center justify-center'>
          <p className='text-gris-oscuro text-9xl te m-0 p-0 tracking-wide'># {pokemon.id}</p>
          <img src={pokemon.sprites.other.dream_world.front_default ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.other.home.front_default || pokemon.sprites.front_default } alt="" className='w-20 mx-auto z-10 absolute '/>
        </div>)
      }
      <h1 className='text-center text-azul text-2xl capitalize'>{pokemon.name}</h1>
     {loading ? <p></p> : <p className='text-center capitalize text-azul text-sm'>{pokemon.type.type.name}</p>}
       </figure>
       <table className='col-span-1 appearance-none table-auto text-sm'>
         <tbody>
          { loading ? <tr><td>Loading...</td></tr> : pokemon.stats.map( item => (
           <tr key={`${pokemon.name}${item.stat.name}`}>
             <td className='capitalize'>{item.stat.name}</td>
             <td>{item.base_stat}</td>
             <td><ProgressBar value={item.base_stat} key={`${item.stat.name}${pokemon.name}`}/></td>
           </tr>))}
         </tbody>
       </table>
    </article>
  )
}
