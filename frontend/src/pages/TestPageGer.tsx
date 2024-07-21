import React, { useEffect, useState } from "react";
import GermanWordsTest from "../data";

const TestPageGer: React.FC = (): React.ReactNode => {
  const allQuestion = GermanWordsTest;
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentAnswer, setCurrentAnswer] = useState("");

  console.log(currentAnswer)
  

  const nextQuestion = () => {
    setCurrentQuestion(
      allQuestion[Math.floor(Math.random() * allQuestion.length)]
    );
  };

  useEffect(() => {
    setCurrentQuestion(
      allQuestion[Math.floor(Math.random() * allQuestion.length)]
    );
  }, []);

  console.log(currentQuestion.correctAnswer)
  console.log(currentAnswer == currentQuestion.correctAnswer)

  return (
    <div className="m-16 items-center flex flex-col gap-8">
      <div>
        <h3 className="font-semibold text-2xl">How to translate this word</h3>
      </div>
      <div>
        <p className="font-semibold text-2xl my-4">{currentQuestion.word}</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-16">
        {/* {currentAnswer && currentAnswer == currentQuestion.correctAnswer} */}
        <div
          onClick={() => setCurrentAnswer(currentQuestion.variantA)}
          className={
            
            currentAnswer === currentQuestion.correctAnswer && currentAnswer === currentQuestion.variantA
              ? "font-semibold text-2xl border-solid border-2 bg-green-500 p-8 rounded-xl" :
              currentAnswer !== currentQuestion.correctAnswer && currentAnswer === currentQuestion.variantA 
              ? "font-semibold text-2xl border-solid border-2 bg-red-500 p-8 rounded-xl"
              : " font-semibold text-2xl border-solid border-2 border-orange-500 p-8 rounded-xl hover:bg-orange-500 hover:text-white  "
          }
        >
          {currentQuestion.variantA}
        </div>
        <div
          onClick={() => setCurrentAnswer(currentQuestion.variantB)}
          className={
            
            currentAnswer === currentQuestion.correctAnswer && currentAnswer === currentQuestion.variantB
              ? "font-semibold text-2xl border-solid border-2 bg-green-500 p-8 rounded-xl" :
              currentAnswer !== currentQuestion.correctAnswer && currentAnswer === currentQuestion.variantB 
              ? "font-semibold text-2xl border-solid border-2 bg-red-500 p-8 rounded-xl"
              : " font-semibold text-2xl border-solid border-2 border-orange-500 p-8 rounded-xl hover:bg-orange-500 hover:text-white  "
          }
        >
          {currentQuestion.variantB}
        </div>
        <div
          onClick={() => setCurrentAnswer(currentQuestion.variantC)}
          className={
            
            currentAnswer === currentQuestion.correctAnswer && currentAnswer === currentQuestion.variantC
              ? "font-semibold text-2xl border-solid border-2 bg-green-500 p-8 rounded-xl" :
              currentAnswer !== currentQuestion.correctAnswer && currentAnswer === currentQuestion.variantC 
              ? "font-semibold text-2xl border-solid border-2 bg-red-500 p-8 rounded-xl"
              : " font-semibold text-2xl border-solid border-2 border-orange-500 p-8 rounded-xl hover:bg-orange-500 hover:text-white  "
          }
        >
          {currentQuestion.variantC}
        </div>
        <div
          onClick={() => setCurrentAnswer(currentQuestion.variantD)}
          className={
            
            currentAnswer === currentQuestion.correctAnswer && currentAnswer === currentQuestion.variantD
              ? "font-semibold text-2xl border-solid border-2 bg-green-500 p-8 rounded-xl" :
              currentAnswer !== currentQuestion.correctAnswer && currentAnswer === currentQuestion.variantD 
              ? "font-semibold text-2xl border-solid border-2 bg-red-500 p-8 rounded-xl"
              : " font-semibold text-2xl border-solid border-2 border-orange-500 p-8 rounded-xl hover:bg-orange-500 hover:text-white  "
          }
        >
          {currentQuestion.variantD}
        </div>
      </div>
      <button
        className=" font-semibold text-2xl border-solid border-2 border-green-500 p-8 rounded-xl hover:bg-green-500 hover:text-white  "
        onClick={nextQuestion}
      >
        Next Question
      </button>
    </div>
  );
};

export default TestPageGer;
