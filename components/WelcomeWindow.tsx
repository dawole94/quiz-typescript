import React, {useState} from 'react'
import { useWWVisibilityContext } from "./WWVisibilityContext";

const WelcomeWindow = () => {

  const { setIsWWVisible } = useWWVisibilityContext();

  function startQuiz() {
    setIsWWVisible(false);
  }
  return (
    <div className="w-96 h-96 bg-gray-400 flex flex-col absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] justify-center items-center gap-10 rounded-full">
      <h1 className="font-bold text-green-800">Welcome to the general knowledge quiz. It contains 10 questions with four answers. Only one is correct.</h1>
      <button className='font-bold bg-blue-300 px-6 py-4 rounded-full' onClick={startQuiz}>Start the quiz</button>
    </div>
  )
}

export default WelcomeWindow