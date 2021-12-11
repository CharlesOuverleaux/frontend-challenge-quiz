import './App.css';
import Quiz from './components/Quiz';
import ScoreMessage from './components/ScoreMessage';
import useToggle from './hooks/useToggleState';

function App() {
  const [isSubmitted, toggle] = useToggle(false);

  return (
    <div className="App">
      { isSubmitted ? <ScoreMessage /> : <Quiz />}
      <button onClick={toggle}>{isSubmitted ? 'Go back': 'Submit my answers'}</button>
    </div>
  );
}

export default App;
