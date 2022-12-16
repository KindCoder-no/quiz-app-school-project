const ResultsView = ({ questions, result }) => {
  var totalPoints = 0;

  var questionsResult = [];

  result.forEach((data, index) => {
    var results = questions[index].answers.findIndex(function (object) {
      return object === data;
    });
    if (results == questions[index].correctIndex) {
      totalPoints += 1;
      questionsResult.push({ question: questions[index].title, correct: true });
    } else {
      questionsResult.push({
        question: questions[index].title,
        correct: false
      });
    }
  });

  return (
    <>
      <div className="container d-flex flex-column min-vh-100">
        <div class="d-flex flex-grow-1 justify-content-center align-items-center">
          <div className="col-12">
            <h1 className="text-center text-white">Resultat</h1>
            <p className="text-center text-white">Poeng: {totalPoints}</p>
            <div className="text-center">
              {questionsResult.map((data) => {
                if (data.correct == true) {
                  return <p style={{ color: "green" }}>{data.question}</p>;
                } else {
                  return <p style={{ color: "red" }}>{data.question}</p>;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsView;
