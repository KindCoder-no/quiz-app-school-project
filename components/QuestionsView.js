import React from "react";

const QuestionsView = ({
  question,
  selectAnswer,
  buttonsDisabled,
  questionData,
  buttonColors,
  nextQuestion
}) => {
  return (
    <div className="container d-flex flex-column min-vh-100">
      <div class="d-flex flex-grow-1 justify-content-center align-items-center">
        <div className="col-12">
          <h1 className="text-center text-white">{question.title}</h1>
          <p className="text-center text-white">{question.description}</p>
          <div className="row justify-content-center">
            <div className="col-md-4 p-2">
              <button
                className={"btn btn-" + buttonColors[0] + " w-100 h-100"}
                onClick={() => selectAnswer(0)}
                disabled={buttonsDisabled}
              >
                <h2 className="text-center">{question.answers[0]}</h2>
              </button>
            </div>
            <div className="col-md-4 p-2">
              <button
                className={"btn btn-" + buttonColors[1] + " w-100 h-100"}
                onClick={() => selectAnswer(1)}
                disabled={buttonsDisabled}
              >
                <h2 className="text-center">{question.answers[1]}</h2>
              </button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 p-2">
              <button
                className={"btn btn-" + buttonColors[2] + " w-100 h-100"}
                onClick={() => selectAnswer(2)}
                disabled={buttonsDisabled}
              >
                <h2 className="text-center">{question.answers[2]}</h2>
              </button>
            </div>

            <div className="col-md-4 p-2">
              <button
                className={"btn btn-" + buttonColors[3] + " w-100 h-100"}
                onClick={() => selectAnswer(3)}
                disabled={buttonsDisabled}
              >
                <h2 className="text-center">{question.answers[3]}</h2>
              </button>
            </div>
          </div>
          <div className="mt-5"></div>
          {buttonsDisabled && (
            <div className="row justify-content-center">
              <div className="col-md-4">
                <button
                  className="btn btn-primary w-100"
                  onClick={nextQuestion}
                >
                  {questionData.questions.length - 1 ==
                  questionData.currentQuestionIndex ? (
                    <h3>Se Resultat</h3>
                  ) : (
                    <h3>Neste Spørsmål</h3>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionsView;
