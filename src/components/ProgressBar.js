import React from 'react'

export const ProgressBar = ({value}) => {

  const largo= {
    width: `${(value*320)/250}px`
  }

  return (
    <div className='container appearance-none  h-2 w-80 rounded-md relative bg-gris-oscuro overflow-hidden '>
      <div className={(value <= 75) ? 'right-0 left-0 bottom-0 relative before:absolute h-2 bg-rojo-claro' : (value >= 76 && value <=160 ) ?'right-0 left-0 bottom-0 relative before:absolute h-2 bg-naranja' : 'right-0 left-0 bottom-0 relative before:absolute h-2 bg-verde'} style={largo}>progress
      </div>
    </div>
  )
}
