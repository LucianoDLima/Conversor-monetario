import React from 'react'
import './output.css'

const Output = ({currencyIcon, finalResult}) => {
  return (
    <div className='final-result'>
      <p>{currencyIcon}{finalResult}</p>
    </div>
  )
}

export default Output