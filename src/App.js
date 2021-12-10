import './App.css';

function App() {
  const questions = [
    {
      questionText: "What is the capital of Belgium?",
      answerOptions: [
        { answerText: "Brussels", isCorrect: true },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Spain?",
      answerOptions: [
        { answerText: "Barcelona", isCorrect: false },
        { answerText: "Madrid", isCorrect: true },
        { answerText: "Seville", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Russia?",
      answerOptions: [
        { answerText: "Moscow", isCorrect: true },
        { answerText: "Voronej", isCorrect: false },
        { answerText: "St.Petersbourg", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Mongolia?",
      answerOptions: [
        { answerText: "Oulan-Bator", isCorrect: true },
        { answerText: "Gengis-City", isCorrect: false },
        { answerText: "Kang-Bator", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Chili?",
      answerOptions: [
        { answerText: "Spicy", isCorrect: false },
        { answerText: "Santiago", isCorrect: true },
        { answerText: "Con Carne", isCorrect: false }
      ],
    },
  ];

  return (
    <div className="App">
    </div>
  );
}

export default App;
