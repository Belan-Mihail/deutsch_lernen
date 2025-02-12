import React, { useEffect } from "react";
import GermanSentences from "../data1";
import { Link } from "react-router-dom";

const TestPageGerSent = () => {
  const allSentences = GermanSentences;

  const [currentSentence, setCurrentSentence] = React.useState({});

  const nextQuestion = () => {
    setCurrentSentence(
      allSentences[Math.floor(Math.random() * allSentences.length)]
    );
  };

  useEffect(() => {
    setCurrentSentence(
      allSentences[Math.floor(Math.random() * allSentences.length)]
    );
  }, []);

  return (
    <div className="m-8 items-center flex flex-col max-[500px]:gap-4 gap-8">
      <div className="flex justify-around w-full max-[500px]:flex-col max-[500px]:justify-center max-[500px]:gap-4 max-[500px]:items-center">
        <div className="text-start">
          <Link
            to="/"
            className="text-sm border-blue-500  border-solid border-2 hover:bg-blue-500 hover:text-white p-2 rounded-xl"
          >
            Back to HomePage
          </Link>
        </div>
        <div className="text-center">
          <span>total number of questions: {allSentences.length}</span>
        </div>
      </div>
      <div className="h-full max-w-full mt-8 p-8 rounded-xl text-white text-center bg-gray-900 flex flex-col gap-4 items-center">
      <p className="text-green-400 mt-2 hover:scale-105">{currentSentence.sentence}</p>
      <hr />
      </div>
      <button
        className=" font-semibold max-[640px]:text-sm text-2xl border-solid border-2 border-green-500 p-4 rounded-xl hover:bg-green-500 hover:text-white  "
        onClick={nextQuestion}
      >
        Next Question
      </button>
    </div>
  );
};

export default TestPageGerSent;
