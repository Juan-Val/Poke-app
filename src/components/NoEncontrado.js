import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NoEncontrado = () => {
  let navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  }

  return (
    <div className='flex flex-col items-center mx-auto align-middle' >
      <h1 className='text-xl m-5'>No pudimos encontrar resuldatos.</h1>
      <img src="https://i.pinimg.com/564x/2a/ae/75/2aae75e428a0e9e96fa3ae934a2fa369.jpg" alt="Pikachu" className='rounded-lg drop-shadow-md'/>
      <button className='rounded-lg bg-naranja text-blanco text-center p-3 m-5 drop-shadow-md' onClick={handleHome}>Home</button>
    </div>
  )
}
