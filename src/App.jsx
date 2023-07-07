import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navigation/>
        <Routes>
          <Route path='/' exact Component={About}/>
          <Route path='/projects' exact Component={Portfolio}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
