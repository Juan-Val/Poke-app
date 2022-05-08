import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { pokemonHome } from '../api/getPokemonTipos';
import { CardPokemon } from './CardPokemon'

export const Element = () => {


  const {name} = useParams();

  const item = {
    name,
    url: `https://pokeapi.co/api/v2/pokemon/${name}/`
  }



  return (
    <main className='container ml-72 my-auto'>
      <CardPokemon key={name} item={item}/>
    </main>
  )
}
