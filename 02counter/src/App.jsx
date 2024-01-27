import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let counter = 15;

  const addvalue = () => {
    console.log("working!!", Math.random() );
  }

  return (
    <>
    <h1>Chai | Tauseef </h1>
    <h3>Counter click {counter}</h3>
    <button onClick={addvalue}>Increase</button>
    <br/>
    <br />
    <button>Decrease</button>
    </>
  )
}

export default App
