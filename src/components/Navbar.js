import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { tipos } from '../api/getTipos';
import { BotonTipo } from './BotonTipo'

export const Navbar = () => {
  let navigate = useNavigate();
  const [Pokemons, setPokemons] = useState([])
  const [form, setForm] = useState('');

  const pokemons = async () => {
  const data = await tipos();
  setPokemons(data)
}

  useEffect(() => {
    pokemons();
  }, [])
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/${form}`);
    setForm('');
    
  }
  const handleForm = (e) => {
    setForm(e.target.value);
  }

  const handleHome = () => {
    navigate('');
  }

  return (
    <div className=' fixed overflow-y-scroll bg-blanco z-10'>
    <nav className='w-66  drop-shadow-lg p-2 h-screen rounded-md'>
      <form className='p-2 bg-gris m-0 p-0 rounded-md drop-shadow-md flex' onSubmit={handleSearch}>
     <input type="text" placeholder='Search' className='bg-gris text-azul p-2 focus:outline-none' name='form' value={form} onChange={handleForm}/> 
     <button className=''><i className='bx bx-search text-gris-oscuro pr-2' onSubmit={handleSearch} ></i></button>
      </form>
      <div className=' mt-2'>
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
