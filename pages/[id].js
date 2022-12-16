import React from "react";
import QuestionsView from "../components/QuestionsView";
import ResultsView from "../components/ResultsView";

export default function HomePage({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [buttonsDisabled, setButtonsDisabled] = React.useState(false);
  const [buttonColors, setButtonColors] = React.useState([
    "primary",
    "primary",
    "primary",
    "primary"
  ]);
  const [results, setResults] = React.useState([]);
  const [showFinish, setShowFinish] = React.useState(false);

  const nextQuestion = () => {
    setButtonColors(["primary", "primary", "primary", "primary"]);
    setButtonsDisabled(false);
    if (!(currentQuestionIndex == questions.length - 1)) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowFinish(true);
    }
  };
  const selectAnswer = (index) => {
    //console.log(index);
    setButtonsDisabled(true);
    var currentQuestion = questions[currentQuestionIndex];

    var pushArray = buttonColors;

    if (currentQuestion.correctIndex == 0) {
      pushArray[0] = "success";
    } else if (currentQuestion.correctIndex == 1) {
      pushArray[1] = "success";
    } else if (currentQuestion.correctIndex == 2) {
      pushArray[2] = "success";
    } else if (currentQuestion.correctIndex == 3) {
      pushArray[3] = "success";
    }

    if (currentQuestion.correctIndex != index) {
      if (index == 0) {
        pushArray[0] = "danger";
      } else if (index == 1) {
        pushArray[1] = "danger";
      } else if (index == 2) {
        pushArray[2] = "danger";
      } else if (index == 3) {
        pushArray[3] = "danger";
      }
    }

    //if (currentQuestion.correctIndex == index) {

    setResults((prevArray) => [...prevArray, currentQuestion.answers[index]]);

    //}

    setButtonColors(pushArray);

    if (!(currentQuestionIndex == questions.length - 1)) {
      //setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  return (
    <>
      {showFinish ? (
        <ResultsView questions={questions} result={results} />
      ) : (
        questions.length > 0 && (
          <QuestionsView
            question={questions[currentQuestionIndex]}
            selectAnswer={selectAnswer}
            buttonsDisabled={buttonsDisabled}
            buttonColors={buttonColors}
            nextQuestion={nextQuestion}
          />
        )
      )}
    </>
  );
}

export async function getServerSideProps({ query }) {
  const fs = require("fs");

  const path = "./data/" + query.id + ".json";

  var exists = fs.access(path, fs.F_OK, (err) => {
    if (err) {
      console.error(err);
      return false;
    } else {
      return true;
    }

    //file exists
  });

  console.log(exists);
  return {
    props: {
      questions: []
    } // will be passed to the page component as props
  };
}