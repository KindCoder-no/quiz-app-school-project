import React from "react";
import AnswerFormItem from "../components/AnswerFormItem";
import QuestionFormItem from "../components/QuestionFormItem";

export default function Custom() {
  const [questions, setQuestions] = React.useState([
    { title: "", answers: ["", "", "", ""], correctIndex: 0 }
  ]);

  const updateQuestion = (index, item, data, answersIndex) => {
    var currentQuestionData = questions;

    if (item == "Title") {
      currentQuestionData[index].title = data;
    } else if (item == "Answer") {
      currentQuestionData[index].answers[answersIndex] = data;
    } else if (item == "Correct") {
      currentQuestionData[index].correctIndex = data;
    }

    setQuestions(currentQuestionData);

    console.log(questions);
  };

  const addQuestion = () => {
    var currentQuestionData = questions;

    var newData = {
      title: "",
      answers: ["", "", "", ""],
      correctIndex: 0
    };

    setQuestions((prevArray) => [...prevArray, newData]);

    console.log(questions);
  };

  return (
    <>
      <div className="container">
        <div className="mt-5"></div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <h1 className="text-center">Lag din egen Quiz!</h1>
              <div className="row justify-content-center">
                <div className="col-8">
                  {questions.map((data, index) => {
                    return (
                      <>
                        <h3>Spørsmål {index + 1}</h3>
                        <QuestionFormItem
                          title="Spørsmål"
                          index={index}
                          updateQuestion={updateQuestion}
                        />
                        <AnswerFormItem
                          index={index}
                          updateQuestion={updateQuestion}
                        />
                      </>
                    );
                  })}
                  <br></br>
                  <div className="row">
                    <div className="col-6">
                      <button
                        className="btn btn-primary w-100"
                        onClick={addQuestion}
                      >
                        Legg til spørsmål
                      </button>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-success w-100">
                        Opprett Quiz
                      </button>
                    </div>
                  </div>
                  <br></br>
                </div>
              </div>
            </div>
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}
