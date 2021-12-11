import { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import ScoreMessage from './components/ScoreMessage';

function App() {

  const [isSubmitted, setisSubmitted] = useState(false);

  const handleSubmit = (isSubmitted) => {
      setisSubmitted(!isSubmitted);

  }

  return (
    <div className="App">
      { isSubmitted ? <ScoreMessage /> : <Quiz />}
      <button onClick={() => handleSubmit(isSubmitted)}>{isSubmitted ? 'Go back': 'Submit my answers'}</button>
    </div>
  );
}

export default App;
