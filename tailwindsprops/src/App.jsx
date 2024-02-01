// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenets/Card';

function App() {
let myObj = {
  username: "tauseef",
  age: 21
}

  return (
    <>
    <h1 className='bg-green-500 text-black rounded-xl mb-4'>tailwind-Test </h1>
     <Card username="chaiandcode"/>
     <Card username="tauseefedits"/>
     <Card username="youareawesome"/>
     <Card username="heythisis"/>
     
    </>
  )
}

export default App
