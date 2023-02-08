// react, componentes, estáticos
import { useContext } from 'react'
import { useState } from 'react'
import { QuizContext } from './context/quiz'
import { useEffect } from 'react'

import Welcome from './components/Welcome'
import Question from './components/Question'

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
    </div>
  )
}

export default App
