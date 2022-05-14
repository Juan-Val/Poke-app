import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { tipos } from '../api/getTipos';
import { BotonTipo } from './BotonTipo'
import { SearchForm } from './SearchForm';

export const Navbar = () => {
  let navigate = useNavigate();

  const [Pokemons, setPokemons] = useState([])
 
  const pokemons = async () => {
  const data = await tipos();
  setPokemons(data)
}

  useEffect(() => {
    pokemons();
  }, [])
  
  const handleSubmit = useCallback(({form}) => {
    navigate(`/${form}`);
  },[navigate])

  const handleHome = () => {
    navigate('');
  }
  

  return (
    <div className=' fixed overflow-y-scroll bg-blanco z-10 min-h-[100%]'>
    <nav className='w-66  drop-shadow-lg p-2 h-screen rounded-md'>
      <SearchForm handleSubmit={handleSubmit}/>
      <div className=' mt-2 min-h-[100%]'>
      <div className='p-2 flex items-center'>
      <button className='bg-gris text-azul drop-shadow-md capitalize rounded-md p-2 w-full hover:bg-rojo-oscuro hover:text-blanco transition ease-in-out delay-250' onClick={handleHome} >Home</button>
    </div>
      {
        Pokemons.map(item => 
          (<BotonTipo key={item.name} data={item}/>)
          )
        }
      </div>
    
    </nav>
        </div>
  )
}
