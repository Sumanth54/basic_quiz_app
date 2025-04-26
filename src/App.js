import { useEffect, useRef, useState } from "react";
import "./styles.css";
const questions = [
  {
    question: "what is the capital of india ?",
    options: ["Delhi", "Munnar", "bengal", "pune"],
    answer: "Delhi",
  },
  {
    question: "what is the cappital of india2 ?",
    options: ["Delhi", "Munnar", "bengal", "pune"],
    answer: "Delhi",
  },
  {
    question: "what is the cappital of indi3 ?",
    options: ["Delhi", "Munnar", "bengal", "pune"],
    answer: "Delhi",
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const checkAnswer = (e) => {
    if (e == questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
    if (currentQuestion == questions.length - 1) {
      setShowScore(true);
    }
  };

  return (
    <>
      {showScore ? (
        <h1>your score is {score}</h1>
      ) : (
        <>
          <h1>Quiz</h1>
          <div>
            {currentQuestion + 1} . {questions[currentQuestion].question}
          </div>
          <div>
            {questions[currentQuestion].options.map((val, ind) => {
              return (
                <button
                  key={ind}
                  style={{ width: "80px" }}
                  onClick={() => checkAnswer(val)}
                >
                  {" "}
                  {val}
                </button>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
