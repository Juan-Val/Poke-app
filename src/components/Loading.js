import React from 'react'


export const Loading = () => {

  const img = 'https://cdn-icons-png.flaticon.com/512/914/914726.png';

  return (
    <div className='mx-auto w-14 h-14  animate-bounce m-14'>
      <img src={img} alt="Pokebola" />
    </div>
  )
}
