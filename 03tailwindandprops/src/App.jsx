import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind Test</h1>
      <br></br>
      <Card />
      <Card username="Swap"/>
    </>
  )
}

export default App
