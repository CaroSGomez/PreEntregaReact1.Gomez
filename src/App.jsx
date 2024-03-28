import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Central from './layout/Central.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Central/>
      <Footer/>
    </>
  )
}

export default App
