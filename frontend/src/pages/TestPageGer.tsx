import React, { useEffect, useState } from "react";
import GermanWordsTest from "../data";
import TestType from "../types/TestType";




const TestPageGer: React.FC = (): React.ReactNode => {
  const allQuestion = GermanWordsTest;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [currentQuestion, setCurrentQuestion] = React.useState<TestType | any>({});
  const [currentAnswer, setCurrentAnswer] = useState("");

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


  return (
    <div className="m-16 items-center flex flex-col gap-8">
      <div>
        <h3 className="font-semibold text-center text-wrap text-2xl">How to translate this word</h3>
      </div>
      <div>
        <p className="font-semibold text-center text-wrap text-2xl my-2">{currentQuestion?.word}</p>
        <p className="text-center text-wrap">
          <span className="mx-2 text-2xl text-center text-wrap text-green-600">{currentQuestion?.forms[0]}</span> <br />
          <span className="mx-2 text-2xl text-center text-wrap text-orange-600">{currentQuestion?.forms[1]}</span> <br />
          <span className="mx-2 text-2xl text-center text-nowrap text-red-600">{currentQuestion?.forms[2]}</span>
        </p>
      </div>
      <div className="grid max-[640px]:grid-cols-1 max-[640px]:grid-rows-1 grid-cols-2 grid-rows-2 gap-8">
        {/* {currentAnswer && currentAnswer == currentQuestion.correctAnswer} */}
        <div
          onClick={() => setCurrentAnswer(currentQuestion!.variantA)}
          className={
            
            currentAnswer === currentQuestion!.correctAnswer && currentAnswer === currentQuestion!.variantA
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-8 rounded-xl" :
              currentAnswer !== currentQuestion!.correctAnswer && currentAnswer === currentQuestion!.variantA 
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-8 rounded-xl"
              : " font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-8 rounded-xl hover:bg-orange-500 hover:text-white  "
          }
        >
          {currentQuestion!.variantA}
        </div>
        <div
          onClick={() => setCurrentAnswer(currentQuestion!.variantB)}
          className={
            
            currentAnswer === currentQuestion!.correctAnswer && currentAnswer === currentQuestion!.variantB
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-8 rounded-xl" :
              currentAnswer !== currentQuestion!.correctAnswer && currentAnswer === currentQuestion!.variantB 
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-8 rounded-xl"
              : "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-8 rounded-xl hover:bg-orange-500 hover:text-white"
          }
        >
          {currentQuestion!.variantB}
        </div>
        <div
          onClick={() => setCurrentAnswer(currentQuestion!.variantC)}
          className={
            
            currentAnswer === currentQuestion!.correctAnswer && currentAnswer === currentQuestion!.variantC
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-8 rounded-xl" :
              currentAnswer !== currentQuestion!.correctAnswer && currentAnswer === currentQuestion!.variantC 
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-8 rounded-xl"
              : "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-8 rounded-xl hover:bg-orange-500 hover:text-white"
          }
        >
          {currentQuestion!.variantC}
        </div>
        <div
          onClick={() => setCurrentAnswer(currentQuestion!.variantD)}
          className={
            
            currentAnswer === currentQuestion!.correctAnswer && currentAnswer === currentQuestion!.variantD
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-8 rounded-xl" :
              currentAnswer !== currentQuestion!.correctAnswer && currentAnswer === currentQuestion!.variantD 
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-8 rounded-xl"
              : "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-8 rounded-xl hover:bg-orange-500 hover:text-white"
          }
        >
          {currentQuestion!.variantD}
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
