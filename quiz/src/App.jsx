// react, componentes, estáticos

import Welcome from './components/Welcome'
import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      <Welcome />
    </div>
  )
}

export default App
