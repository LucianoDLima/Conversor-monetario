import { useState } from "react";
import Button from "./components/Button/Button";
import Currencies from "./components/Currencies/Currencies";
import Output from "./components/Output/Output";
import Value from "./components/Value/Value";
import './app.css';

const currency = [
  {
    name: 'Dólar',
    value: '0.19',
    icon: '$'
  },
  {
    name: 'Euro',
    value: '0.18',
    icon: '€',
  },
  {
    name: 'Peso argentino',
    value: '38.46',
    icon: '₱'
  }
];


function App() {
  const [inputValue, setInputValue] = useState('')
  const [outputValue, setOutputValue] = useState('')
  const [optionValue, setOptionValue] = useState('')
  const [icon, setIcon] = useState('')

  const handle = () => {
    setInputValue(inputValue)
    setIcon(getCurrencyIcon());
    setOutputValue((inputValue * getCurrencyValue()).toFixed(2));
  }

  const inputChange = (e) => {
    setInputValue(e.target.value)
  }

  const optionChange = (e) => {
    setOptionValue(e.target.value);
  }

  const getCurrencyValue = () => {
    const selected = currency.find(curr => curr.name === optionValue)
    return selected ? selected.value : ''
  }

  const getCurrencyIcon = () => {
    const selected = currency.find(curr => curr.name === optionValue)
    return selected ? selected.icon : ''
  }


  return (
    <main>
      <div className="container">
        <h1>Conversor Monetario</h1>
        <Value currentValue={inputValue} changeWhenType={inputChange}/>
        <Currencies 
        selects={optionChange}
        options={currency.map((cur) => 
        <option key={cur.name}>{cur.name}</option>)}/>
        <Button onButtonClick={handle}/>
        <Output currencyIcon={icon} finalResult={outputValue} />
      </div>
    </main>
  );
}

export default App;
