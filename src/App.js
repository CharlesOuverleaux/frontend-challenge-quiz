import { useState } from 'react';
import './App.css';
import { data } from './data/data';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [isSubmitted, setisSubmitted] = useState(false);
  const [questions, setQuestions] = useLocalStorage('questions', data);

  const handleClick = (isCorrect, questionId, optionId, isSelected, answerCorrect) => {

    if (isCorrect) {
      const updatedData = questions.map((question) =>
          questionId === question["id"] ?
            {...question,
            answerCorrect: !answerCorrect,
            answerOptions: question['answerOptions'].map((option) =>
              optionId === option["optionId"] ?
              {...option,
              isSelected: !isSelected
              } : option
            )
          } : question
      );
      setQuestions(updatedData);
    } else {
      const updatedData = questions.map((question) =>
        questionId === question["id"]
          ? {...question,
            answerCorrect: false,
            answerOptions: question["answerOptions"].map((option) =>
              optionId === option["optionId"]
                ? { ...option, isSelected: !isSelected }
                : {...option, isSelected: false}
              ),
            }
          : question
      );
      setQuestions(updatedData);
    }
  }

  const handleSubmit = (isSubmitted) => {
      setisSubmitted(!isSubmitted);
  }

  return (
    <div className="App">
      {!isSubmitted && (
        <div className="quiz">
          {questions.map((question) => (
            <>
              <div className="question-section">
                <div className="question-text">{question.questionText}</div>
              </div>
              <div className="answer-section">
                {question.answerOptions.map((option) => (
                  <button
                    key={option.answerText}
                    onClick={() =>
                      handleClick(
                        option.isCorrect,
                        question["id"],
                        option["optionId"],
                        option.isSelected,
                        question.answerCorrect
                      )
                    }
                  >
                    <div className="answer-text">{option.answerText}</div>
                  </button>
                ))}
              </div>
            </>
          ))}
        </div>
      )}
      <button onClick={() => handleSubmit(isSubmitted)}>{isSubmitted ? 'Go back': 'Submit my answers'}</button>
    </div>
  );
}

export default App;
