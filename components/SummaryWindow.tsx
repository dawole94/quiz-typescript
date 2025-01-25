"use client"

import React, {useRef} from 'react'
import { useMyContext } from "./MyContext";
import { useVisibilityContext } from "./VisibilityContext";

const SummaryWindow = () => {

  const { points, setPoints } = useMyContext();
  const { setIsVisible } = useVisibilityContext();
  const againButtonRef = useRef<(HTMLButtonElement | null)>(null);

  function restartQuiz() {
    setIsVisible(false);
    setPoints(0);
  }

  return (
    <div className="w-96 h-96 bg-gray-400 flex flex-col absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] justify-center items-center gap-10 rounded-full">
      <h1 className="font-bold text-green-800">Thank you for participating in the Quiz. You have answered correctly for {points} out of 10 questions.</h1>
      <button ref={againButtonRef} className='font-bold bg-blue-300 px-6 py-4 rounded-full' onClick={restartQuiz}>Restart the quiz</button>
    </div>
  )
}

export default SummaryWindow