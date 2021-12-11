
export default function ScoreMessage(){
  const results = JSON.parse(localStorage.getItem('questions'))

  let count = 0;
  results.forEach((result) =>
    result.answerCorrect ? count++ : count
  );

  return (
    <div className="ScoreMessage">
      <p>Your score is: {count} out of 5</p>
    </div>
  );
}
