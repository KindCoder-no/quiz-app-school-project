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
            <br></br>
            <div className="row justify-content-center">
              <div className="col-6 text-center">
                {questionsResult.map((data) => {
                  if (data.correct == true) {
                    return (
                      <>
                        <div className="card">
                          <div className="card-body">
                            <p style={{ color: "green" }}>{data.question}</p>
                            <p>Riktig svar: {data.correctAnswer}</p>
                            <p>Ditt svar: {data.answer}</p>
                          </div>
                        </div>
                        <br></br>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <div className="card">
                          <div className="card-body">
                            <p style={{ color: "red" }}>{data.question}</p>
                            <p>Riktig svar: {data.correctAnswer}</p>
                            <p>Ditt svar: {data.answer}</p>
                          </div>
                        </div>
                        <br></br>
                      </>
                    );
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
