import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map from './components/map/Map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width: '100vh', backgroundColor: 'red'}}>

      <Map></Map>
    </div>
  )
}

export default App
