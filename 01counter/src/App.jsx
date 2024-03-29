import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(2);
  const addValue = () => {
    if (counter >= 20) {
      console.log('value can not be greater than 20')
    }
    else setCounter(counter + 1)
  }
  const removeValue = () => {
    if (counter <= 0) {
      console.log('value can not be lesser than 0')
    }
    else setCounter(counter - 1)
  }


  return (
    <>
      <h1>Counter Using React</h1>
      <p>Counter value {counter} </p>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
