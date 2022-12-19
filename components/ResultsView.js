import Answer from "./Answer";

const ResultsView = ({ questions, result }) => {
  var totalPoints = 0;

  var questionsResult = [];

  result.forEach((data, index) => {
    var results = questions[index].answers.findIndex(function (object) {
      return object === data;
    });
    if (results == questions[index].correctIndex) {
      totalPoints += 1;
      questionsResult.push({
        question: questions[index].title,
        correct: true,
        correctAnswer: questions[index].answers[questions[index].correctIndex],
        answer: data
      });
    } else {
      questionsResult.push({
        question: questions[index].title,
        correct: false,
        correctAnswer: questions[index].answers[questions[index].correctIndex],
        answer: data
      });
    }
  });

  return (
    <>
      <div className="container d-flex flex-column min-vh-100">
        <div class="d-flex flex-grow-1 justify-content-center align-items-center">
          <div className="col-12">
            <h1 className="text-center text-white">Resultat</h1>
            <h2 className="text-center text-white">
              {totalPoints}/{questions.length} riktig
            </h2>
            <div className="mt-5"></div>
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                {questionsResult.map((data) => {
                  if (data.correct == true) {
                    return <Answer color="success" data={data} />;
                  } else {
                    return <Answer color="danger" data={data} />;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsView;
