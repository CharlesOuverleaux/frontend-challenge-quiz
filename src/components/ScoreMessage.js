import './ScoreMessage.css'

export default function ScoreMessage(){
  const results = JSON.parse(localStorage.getItem('questions'))

  let count = 0;
  results.forEach((result) =>
    result.answerCorrect ? count++ : count
  );

  return (
    <div className="ScoreMessage">
      <p>Your have {count} correct answers out of {results.length} questions</p>
    </div>
  );
}
