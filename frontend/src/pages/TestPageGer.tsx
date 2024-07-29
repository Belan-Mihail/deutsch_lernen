import React, { useEffect, useState } from "react";
import GermanWordsTest from "../data";
import TestType from "../types/TestType";
import { Link } from "react-router-dom";

const TestPageGer: React.FC = (): React.ReactNode => {
  const allQuestion = GermanWordsTest;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [currentQuestion, setCurrentQuestion] = React.useState<TestType | any>(
    {}
  );
  const [currentAnswer, setCurrentAnswer] = useState("");
  
  const [trueAnswer, setTrueAnswer] = useState(0)
  const [falseAnswer, setFalseAnswer] = useState(0)



  const nextQuestion = () => {
    setCurrentQuestion(
      allQuestion[Math.floor(Math.random() * allQuestion.length)]
    );
    setCurrentAnswer('')
  };

  const checkAnswer = (userAnswer: string) => {
    
    if (userAnswer !== currentQuestion.correctAnswer ) {
    setFalseAnswer(falseAnswer + 1)
  } else {
    setTrueAnswer(trueAnswer + 1)
  }

  
  
}

  useEffect(() => {
    setCurrentQuestion(
      allQuestion[Math.floor(Math.random() * allQuestion.length)]
    );

    
    
    
  }, []);

  

  

  

  return (
    <div className="m-8 items-center flex flex-col max-[500px]:gap-4 gap-8">
      <div className="flex justify-around w-full max-[500px]:flex-col max-[500px]:justify-center max-[500px]:gap-4 max-[500px]:items-center">
        <div className="text-start">
          <Link to='/' className="text-sm border-blue-500  border-solid border-2 hover:bg-blue-500 hover:text-white p-2 rounded-xl">Back to HomePage</Link>
        </div>
        <div className="text-end">
          <span>total number of questions: {allQuestion.length}</span>
        </div>
        
      </div>
      <div>
        <p className="font-semibold text-center text-wrap text-2xl my-2">
          {currentQuestion?.word}
        </p>
        <p className="text-center text-wrap">
          {currentQuestion.forms && currentQuestion.forms[0] && <p className="mx-2 text-2xl text-center text-wrap text-green-600">{currentQuestion.forms[0]}</p>}
          {currentQuestion.forms && currentQuestion.forms[1] && <p className="mx-2 text-2xl text-center text-wrap text-orange-600">{currentQuestion.forms[1]}</p>}
          {currentQuestion.forms && currentQuestion.forms[2] && <p className="mx-2 text-2xl text-center text-wrap text-red-600">{currentQuestion.forms[2]}</p>}
        </p>
      </div>
      <div className="grid max-[640px]:grid-cols-1 max-[640px]:grid-rows-1 grid-cols-2 grid-rows-2 max-[500px]:gap-4 gap-8">
        {/* {currentAnswer && currentAnswer == currentQuestion.correctAnswer} */}
        <button
          onClick={() => {setCurrentAnswer(currentQuestion!.variantA); checkAnswer(currentQuestion!.variantA)}}
          className={
            currentAnswer === currentQuestion!.correctAnswer &&
            currentAnswer === currentQuestion!.variantA || currentAnswer.length > 0 && currentAnswer !== currentQuestion!.correctAnswer &&  currentQuestion!.correctAnswer === currentQuestion!.variantA
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
              : currentAnswer !== currentQuestion!.correctAnswer &&
                currentAnswer === currentQuestion!.variantA
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
              : " font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white  "
          }
          disabled={currentAnswer.length > 0}
        >
          {currentQuestion!.variantA}
        </button>
        <button
          onClick={() => {setCurrentAnswer(currentQuestion!.variantB); checkAnswer(currentQuestion!.variantB)}}
          className={
            currentAnswer === currentQuestion!.correctAnswer &&
            currentAnswer === currentQuestion!.variantB || currentAnswer.length > 0 && currentAnswer !== currentQuestion!.correctAnswer &&  currentQuestion!.correctAnswer === currentQuestion!.variantB
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500  p-4 rounded-xl"
              : currentAnswer !== currentQuestion!.correctAnswer &&
                currentAnswer === currentQuestion!.variantB
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500  p-4 rounded-xl"
              : "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl disabled:hover:bg-transparent disabled:hover:text-black   hover:bg-orange-500 hover:text-white"
          }
          disabled={currentAnswer.length > 0}
        >
          {currentQuestion!.variantB}
        </button>
        <button
          onClick={() => {setCurrentAnswer(currentQuestion!.variantC); checkAnswer(currentQuestion!.variantC)}}
          className={
            currentAnswer === currentQuestion!.correctAnswer &&
            currentAnswer === currentQuestion!.variantC || currentAnswer.length > 0 && currentAnswer !== currentQuestion!.correctAnswer &&  currentQuestion!.correctAnswer === currentQuestion!.variantC 
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
              : currentAnswer !== currentQuestion!.correctAnswer &&
                currentAnswer === currentQuestion!.variantC
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
              : "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white"
          }
          disabled={currentAnswer.length > 0}
        >
          {currentQuestion!.variantC}
        </button>
        <button
          onClick={() => {setCurrentAnswer(currentQuestion!.variantD); checkAnswer(currentQuestion!.variantD)}}
          className={
            currentAnswer === currentQuestion!.correctAnswer &&
            currentAnswer === currentQuestion!.variantD || currentAnswer.length > 0 && currentAnswer !== currentQuestion!.correctAnswer &&  currentQuestion!.correctAnswer === currentQuestion!.variantD
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
              : currentAnswer !== currentQuestion!.correctAnswer &&
                currentAnswer === currentQuestion!.variantD
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
              : "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white"
          }
          disabled={currentAnswer.length > 0}
        >
          {currentQuestion!.variantD}
        </button>
      </div>
      <button
        className=" font-semibold max-[640px]:text-sm text-2xl border-solid border-2 border-green-500 p-4 rounded-xl hover:bg-green-500 hover:text-white  "
        onClick={nextQuestion}
      >
        Next Question
      </button>
      <div className="m-2 flex gap-4 items-center">
          <p className="text-center">Correct Answer: {trueAnswer}</p>
          <p className="text-center">Incorrect Answer: {falseAnswer}</p>
      </div>
    </div>
  );
};

export default TestPageGer;
