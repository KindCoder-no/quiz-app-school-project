import Router, { useRouter } from "next/router";
import React from "react";

import QuestionsView from "../components/QuestionsView";
import ResultsView from "../components/ResultsView";

export default function HomePage() {
  const router = useRouter();
  const { id } = router.query;

  const [questions, setQuestions] = React.useState([]);
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

  React.useEffect(() => {
    if (router.isReady) {
      console.log(id);
      fetch("/api/quiz?id=" + id)
        .then((response) => response.json())
        .then((data) => {
          if (data.error == true) {
            if (data.exists == false) {
              Router.push("/");
            }
          } else {
            setQuestions(data.questions);
          }
          console.log(data);
        });
    }
  }, [router.isReady]);

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

    pushArray[currentQuestion.correctIndex] = "success";

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
