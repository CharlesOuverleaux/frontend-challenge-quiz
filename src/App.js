import { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import useLocalStorage from './hooks/useLocalStorage';
import { data } from './data/data'
import ScoreMessage from './components/ScoreMessage';

function App() {

  const [isSubmitted, setisSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useLocalStorage("questions", data);

  const handleSubmit = (isSubmitted) => {
      setisSubmitted(!isSubmitted);
      let count = 0
      questions.forEach((question) =>
        question.answerCorrect ? count++ : count
      )
      setScore(count)
  }

  return (
    <div className="App">
      { isSubmitted ? <ScoreMessage score={score}/> : <Quiz />}
      <button onClick={() => handleSubmit(isSubmitted)}>{isSubmitted ? 'Go back': 'Submit my answers'}</button>
    </div>
  );
}

export default App;
