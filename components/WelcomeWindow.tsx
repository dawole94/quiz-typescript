import React, {useState} from 'react'
import { useWWVisibilityContext } from "./WWVisibilityContext";

const WelcomeWindow = () => {

  const { setIsWWVisible } = useWWVisibilityContext();

  function startQuiz() {
    setIsWWVisible(false);
  }
  return (
    <div className="px-5 py-5 minWidth bg-gray-400 flex flex-col absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] justify-center items-center gap-5 rounded-3xl">
      <h1 className="font-bold text-green-800 text-center">Welcome to the general knowledge quiz. It contains 10 questions with four answers. Only one is correct.</h1>
      <button className='font-bold bg-blue-300 px-6 py-4 rounded-full' onClick={startQuiz}>Start the quiz</button>
    </div>
  )
}

export default WelcomeWindow