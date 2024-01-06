import { useState } from 'react'

import './App.css'

function App() {
 
  let [counter, setCounter]= useState(15)
 

  const addValue = ()=>{
    setCounter((prevCounter)=>prevCounter + 1)
    setCounter((prevCounter)=>prevCounter + 1)
    setCounter((prevCounter)=>prevCounter + 1)
    setCounter((prevCounter)=>prevCounter + 1)

  }

  const removeValue=()=>{
    counter = counter -1
    setCounter(counter -1)
  }

  return (
    <>
      <h1>react course with hiteset {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}>add value</button> {" "}
      <button
      onClick={removeValue}>remove value</button>
      <p>footer{counter}</p>
    </>
  )
}

export default App
