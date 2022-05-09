import React, { useState } from 'react'

export const SearchForm = ({handleSubmit}) => {

  const [form, setForm] = useState('');


  const handleForm = (e) => {
    setForm(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    handleSubmit({form})
    setForm('');

  }

  return (
    <form className=' bg-gris m-0 p-0 rounded-md drop-shadow-md flex' onSubmit={handleSearch}>
     <input type="text" placeholder='Search' className='bg-gris text-azul p-2 focus:outline-none' name='form' value={form} onChange={handleForm}/> 
     <button className=''><i className='bx bx-search text-gris-oscuro pr-2'  ></i></button>
      </form>
  )
}
