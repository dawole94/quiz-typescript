"use client"

import React, { useRef, useState } from "react";
import { questions } from "./QuestionBank";
import { useMyContext } from "./MyContext";
import { useVisibilityContext } from "./VisibilityContext";

const QuestionWindow = () => {
  const { points, setPoints } = useMyContext();
  const { setIsVisible } = useVisibilityContext();
  const [i, setI] = useState<number>(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const okButtonRef = useRef<(HTMLButtonElement | null)>(null);
  const nextButtonRef = useRef<(HTMLButtonElement | null)>(null);
  const messageCorrectRef = useRef<HTMLParagraphElement | null>(null);
  const messageWrongRef = useRef<HTMLParagraphElement | null>(null);
  const finishButtonRef = useRef<(HTMLButtonElement | null)>(null);
  const againButtonRef = useRef<(HTMLButtonElement | null)>(null);


  function markAnswer(buttonIndex: number) {
    if (!okButtonRef.current?.classList.contains("disapear")) {
      buttonRefs.current.forEach((button) => button?.classList.remove("markedAnswer"));
      buttonRefs.current.forEach((button) => button?.classList.add("answerButton"));
      buttonRefs.current[buttonIndex]?.classList.remove("answerButton");
      buttonRefs.current[buttonIndex]?.classList.add("markedAnswer");
    }
  }

  function checkParticularAnswer(correctAnswerIndex: number) {
    buttonRefs.current[correctAnswerIndex]?.classList.remove("answerButton");
    buttonRefs.current[correctAnswerIndex]?.classList.add("rightAnswer");
        if (buttonRefs.current[correctAnswerIndex]?.classList.contains("markedAnswer")) {
          setPoints((prevPoints) => prevPoints + 1);
          messageCorrectRef.current?.classList.remove("disapear")
        } else {
          document.querySelector(".markedAnswer")?.classList.add("wrongAnswer");
          messageWrongRef.current?.classList.remove("disapear")
        }
  }

  function checkAnswer() {
    if (buttonRefs.current.some((button) => button?.classList.contains("markedAnswer"))) {
      okButtonRef.current?.classList.add("disapear");
      if(i<=8) {
        nextButtonRef.current?.classList.remove("disapear");
      } else {
        finishButtonRef.current?.classList.remove("disapear");
      }
      
      if (i===0) {
        checkParticularAnswer(1);
      } else if (i===1) {
        checkParticularAnswer(2);
      } else if (i===2) {
        checkParticularAnswer(0);
      } else if (i===3) {
        checkParticularAnswer(2);
      } else if (i===4) {
        checkParticularAnswer(2);
      } else if (i===5) {
        checkParticularAnswer(0);
      } else if (i===6) {
        checkParticularAnswer(2);
      } else if (i===7) {
        checkParticularAnswer(1);
      } else if (i===8) {
        checkParticularAnswer(1);
      } else if (i===9) {
        checkParticularAnswer(1);
      } 
    }
  }

  function goToNextQuestion() {
    buttonRefs.current.forEach((button) => button?.classList.add("answerButton"));
    if (i<=8) {
      setI((prevI) => prevI + 1)
    }
    okButtonRef.current?.classList.remove("disapear");
    nextButtonRef.current?.classList.add("disapear");
    messageCorrectRef.current?.classList.add("disapear")
    messageWrongRef.current?.classList.add("disapear")
    buttonRefs.current.forEach((button) => button?.classList.remove("rightAnswer"));
    buttonRefs.current.forEach((button) => button?.classList.remove("wrongAnswer"));
    buttonRefs.current.forEach((button) => button?.classList.remove("markedAnswer"));
  }

  function finishQuiz() {
    setIsVisible(true);
    setI(0);
  }

  return (
    <div className="w-96 py-5 bg-gray-400 flex flex-col absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] justify-center items-center gap-5 rounded-3xl">
      <p>points: {points}</p>
      <h1 className="font-bold px-10 text-center">{questions[i].q}</h1>
      <button className="answerButton"
        ref={(el) => {
          buttonRefs.current[0] = el;
        }}
        onClick={() => markAnswer(0)}
      >
        {questions[i].a1}
      </button>
      <button className="answerButton"
        ref={(el) => {
          buttonRefs.current[1] = el;
        }}
        onClick={() => markAnswer(1)}
      >
        {questions[i].a2}
      </button>
      <button className="answerButton"
        ref={(el) => {
          buttonRefs.current[2] = el;
        }}
        onClick={() => markAnswer(2)}
      >
        {questions[i].a3}
      </button>
      <button className="answerButton"
        ref={(el) => {
          buttonRefs.current[3] = el;
        }}
        onClick={() => markAnswer(3)}
      >
        {questions[i].a4}
      </button>
      <button ref={okButtonRef} onClick={checkAnswer} className="bg-green-300 px-8 py-1 rounded-full font-bold">OK</button>
      <p ref={messageCorrectRef} className="ts-message-correct disapear">Correct! Well done!</p>
      <p ref={messageWrongRef} className="ts-message-wrong disapear">Wrong answer</p>
      <button ref={nextButtonRef} onClick={goToNextQuestion} className="disapear bg-blue-500 px-5 py-1 rounded-full font-bold">Next Question</button>
      <button ref={finishButtonRef} className="disapear bg-blue-500 px-5 py-1 rounded-full font-bold" onClick={finishQuiz}>Finish the quiz</button>
    </div>
  );
};

export default QuestionWindow;
