import React, { useEffect, useState } from 'react'
import GermanWordsTest from '../data'



const TestPageGer: React.FC = ():React.ReactNode => {
  const allQuestion = GermanWordsTest
  const [currentQuestion, setCurrentQuestion] = useState({})

  const nextQuestion = () => {
    setCurrentQuestion(allQuestion[Math.floor(Math.random() * allQuestion.length)])
  }

  useEffect(() => {
    setCurrentQuestion(allQuestion[Math.floor(Math.random() * allQuestion.length)])
  }, [])

  
  return (
    <div className="m-16 items-center flex flex-col gap-8">
      <div>
        {currentQuestion.correctAnswer}
      </div>
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default TestPageGer