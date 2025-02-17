"use client"

import React, {useRef} from 'react'
import { useMyContext } from "./MyContext";
import { useVisibilityContext } from "./VisibilityContext";
import { useWWVisibilityContext } from "./WWVisibilityContext";

const SummaryWindow = () => {

  const { points, setPoints } = useMyContext();
  const { setIsVisible } = useVisibilityContext();
  const { setIsWWVisible } = useWWVisibilityContext();
  const againButtonRef = useRef<(HTMLButtonElement | null)>(null);

  function restartQuiz() {
    setIsVisible(false);
    setIsWWVisible(true);
    setPoints(0);
  }

  return (
    <div className="px-5 py-5 minWidth bg-gray-400 flex flex-col absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] justify-center items-center gap-5 rounded-3xl">
      <h1 className="font-bold text-green-800 text-center">Thank you for participating in the Quiz. You have answered correctly for {points} out of 10 questions.</h1>
      <button ref={againButtonRef} className='font-bold bg-blue-300 px-6 py-4 rounded-full' onClick={restartQuiz}>Restart the quiz</button>
    </div>
  )
}

export default SummaryWindow