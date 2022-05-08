import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';


export const BotonTipo = ({data}) => {
  let navigate = useNavigate();
  const [pokemons, setPokemons] = useState([])

 const pokemonsTipo =  (e) => {
   e.preventDefault();
  navigate (`/tipo/${data.name}`)
 }

  return (
    <div className='p-2 flex items-center'>
      <button className='bg-gris text-azul drop-shadow-md capitalize rounded-md p-2 w-full hover:bg-rojo-oscuro hover:text-blanco transition ease-in-out delay-250' onClick={pokemonsTipo}>{data.name}</button>
    </div>
  )
}
