import React from 'react'
import Header from './Components/Header'
import Feature from './Components/Feature'
import Feature2 from './Components/Feature2'
import Apply from './Components/Apply'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import './App.css'

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Feature type="launch" />
      <Feature2 type="design" />
      <Feature type="train" />
      <Feature2 type="migrate" />
      <Apply />
      <Footer />
    </div>
  )
}

export default App
