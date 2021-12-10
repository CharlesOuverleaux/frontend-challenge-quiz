import { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      questionText: "What is the capital of Belgium?",
      answerOptions: [
        { answerText: "Brussels", isCorrect: true, isSelected: false },
        { answerText: "London", isCorrect: false, isSelected: false },
        { answerText: "Paris", isCorrect: false, isSelected: false },
      ],
    },
    {
      questionText: "What is the capital of Spain?",
      answerOptions: [
        { answerText: "Barcelona", isCorrect: false, isSelected: false },
        { answerText: "Madrid", isCorrect: true, isSelected: false },
        { answerText: "Seville", isCorrect: false, isSelected: false },
      ],
    },
    {
      questionText: "What is the capital of Russia?",
      answerOptions: [
        { answerText: "Moscow", isCorrect: true, isSelected: false },
        { answerText: "Voronej", isCorrect: false, isSelected: false },
        { answerText: "St.Petersbourg", isCorrect: false, isSelected: false },
      ],
    },
    {
      questionText: "What is the capital of Mongolia?",
      answerOptions: [
        { answerText: "Oulan-Bator", isCorrect: true, isSelected: false },
        { answerText: "Gengis-City", isCorrect: false, isSelected: false },
        { answerText: "Kang-Bator", isCorrect: false, isSelected: false },
      ],
    },
    {
      questionText: "What is the capital of Chili?",
      answerOptions: [
        { answerText: "Spicy", isCorrect: false, isSelected: false },
        { answerText: "Santiago", isCorrect: true, isSelected: false },
        { answerText: "Con Carne", isCorrect: false, isSelected: false }
      ],
    },
  ];
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [endQuiz, setendQuiz] = useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion + 1 == questions.length) {
      setendQuiz(true);
    }
  }

  return (
    <div className="App">
      <div className="quiz">
        <>
          <div className="question-section">
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((option) => (
              <button onClick={() => handleClick(option.isCorrect)}>
                <div className="answer-text">{option.answerText}</div>
              </button>
            ))}
          </div>
        </>
        {endQuiz &&
          <h1>Your score is: {score} / {questions.length}</h1>
        }
      </div>
    </div>
  );
}

export default App;
