import useLocalStorage from "../hooks/useLocalStorage"
import { data } from "../data/data"
import './Quiz.css'

export default function Quiz(){
  const [questions, setQuestions] = useLocalStorage("questions", data);

  const handleClick = (isCorrect, questionId, optionId, isSelected, answerCorrect) => {
    if (isCorrect) {
      const updatedData = questions.map((question) =>
        questionId === question["id"]
          ? {
              ...question,
              answerCorrect: !answerCorrect,
              answerOptions: question["answerOptions"].map((option) =>
                optionId === option["optionId"]
                  ? { ...option, isSelected: !isSelected }
                  : option
              ),
            }
          : question
      );
      setQuestions(updatedData);
    } else {
      const updatedData = questions.map((question) =>
        questionId === question["id"]
          ? {
              ...question,
              answerCorrect: false,
              answerOptions: question["answerOptions"].map((option) =>
                optionId === option["optionId"]
                  ? { ...option, isSelected: !isSelected }
                  : { ...option, isSelected: false }
              ),
            }
          : question
      );
      setQuestions(updatedData);
    }
  };

  return (
    <div className="Quiz">
      {questions.map((question) => (
        <>
          <div className="question-section">
            <div className="question-text">{question.questionText}</div>
          </div>
          <div className="answer-section">
            {question.answerOptions.map((option) => (
              <button
                className={(option.isSelected ? "button-selected" : "button-unselected")}
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
  );
}
