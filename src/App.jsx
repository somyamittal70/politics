import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/layouts/Header'
import Footer from "./components/layouts/Footer"
import Home from './pages/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home />
    <Footer />
    </>
  )
}

export default App
