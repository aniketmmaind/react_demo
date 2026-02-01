import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    // counter += 1;
    setCounter(counter + 1);
    console.log("Value added", counter);
  }

  const removeValue = () => {
    if (counter > 0)
      setCounter(counter - 1);
    else
      alert("Cant remove zero element");
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value: {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value: {counter}</button>
      <br />
      <br />
      <p>footer{counter}</p>
    </>
  )
}

export default App
