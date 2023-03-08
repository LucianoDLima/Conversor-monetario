import React, { useState } from 'react';
import './currencies.css';

const Currencies = ({options, selects}) => {

  return (
    <div className='options-container'>
      <label htmlFor="para">Para:</label>
      <select onChange={selects} id='para'>
        <option></option>
        {options}
      </select>
    </div>
  );
};

export default Currencies;
