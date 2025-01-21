"use client"

import React, { useRef } from "react";
import { questions } from "./QuestionBank";

const QuestionWindow = () => {
  let i: number = 0;
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function markAnswer(buttonIndex: number) {
    buttonRefs.current.forEach((button) => button?.classList.remove("markedAnswer"));
    buttonRefs.current[buttonIndex]?.classList.add("markedAnswer");
  }

  function checkAnswer() {
    if (i===0) {
      buttonRefs.current[1]?.classList.add("rightAnswer")
      if (buttonRefs.current[1]?.classList.contains("markedAnswer")) {
        console.log('write answer')
      } else {
        document.querySelector(".markedAnswer")?.classList.add("wrongAnswer");
        console.log("wrong answer")
      }
    } else if (i===1) {

    }
  }

  return (
    <div className="w-96 h-96 bg-gray-400 flex flex-col absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] justify-center items-center gap-5 rounded-3xl">
      <h1 className="font-bold">{questions[i].q}</h1>
      <button
        ref={(el) => {
          buttonRefs.current[0] = el;
        }}
        onClick={() => markAnswer(0)}
      >
        {questions[i].a1}
      </button>
      <button
        ref={(el) => {
          buttonRefs.current[1] = el;
        }}
        onClick={() => markAnswer(1)}
      >
        {questions[i].a2}
      </button>
      <button
        ref={(el) => {
          buttonRefs.current[2] = el;
        }}
        onClick={() => markAnswer(2)}
      >
        {questions[i].a3}
      </button>
      <button
        ref={(el) => {
          buttonRefs.current[3] = el;
        }}
        onClick={() => markAnswer(3)}
      >
        {questions[i].a4}
      </button>
      <button onClick={checkAnswer}>OK</button>
    </div>
  );
};

export default QuestionWindow;
