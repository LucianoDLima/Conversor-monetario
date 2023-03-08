import React from 'react'
import './value.css'

const Value = ({currentValue, changeWhenType}) => {
  return (
    <div className='input-container'>
      <label htmlFor='input'>Valor em real</label>
      <input id='input' type='number' value={currentValue} onChange={changeWhenType}/>
    </div>
  )
}

export default Value