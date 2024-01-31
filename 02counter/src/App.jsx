import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  //let counter = 15;

  let [counter , setcounter] = useState(15)

  // const addvalue = () => {
  //   counter = counter + 1;
  //   setcounter(counter);
  
  // }

    const addvalue = () => {if(counter < 20){
      counter = counter + 1;
      setcounter(counter);
     
    }}
  
  
  const subvalue = () => {if(counter > 0){
    counter = counter - 1;
    setcounter(counter);
  }

  }

  return (
    <>
    <h1>Chai | Tauseef </h1>
    <h3>Counter click {counter}</h3>
    <button onClick={addvalue}>Increase</button>
    <br/>
    <br />
    <button onClick={subvalue}>Decrease</button>
    </>
  )
}

export default App
