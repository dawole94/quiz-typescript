import React from 'react'
import {questions} from './QuestionBank'

const QuestionWindow = () => {

  let i: number = 0;

  return (
    <div className="w-96 h-96 bg-gray-400 flex flex-col absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] justify-center items-center gap-5 rounded-3xl">
      <h1 className="font-bold">{questions[i].q}</h1>
      <p>{questions[i].a1}</p>
      <p>{questions[i].a2}</p>
      <p>{questions[i].a3}</p>
      <p>{questions[i].a4}</p>
    </div>
  )
}

export default QuestionWindow