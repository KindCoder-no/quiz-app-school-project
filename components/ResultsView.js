const ResultsView = ({ questions, result }) => {
  var totalPoints = 0;

  result.forEach((data, index) => {
    var results = questions[index].answers.findIndex(function (object) {
      return object === data;
    });
    console.log(results);
  });

  return <></>;
};

export default ResultsView;
