import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@material-tailwind/react'
import Admin from './Components/Admin'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Admin />
    </>
  )
}

export default App
