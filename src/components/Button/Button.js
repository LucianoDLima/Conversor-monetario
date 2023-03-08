import React from 'react'
import './button.css'

const Button = ({ onButtonClick }) => {
  return (
    <div>
      <button onClick={onButtonClick}>Converter</button>
    </div>
  )
}

export default Button;