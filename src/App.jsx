import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from '../components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className = "flex justify-center gap-4 mt-4">
      <Card title = "card1"/>
      <Card title = "card2"/>
      <Card />
    </div>
    </>
  )
}

export default App
