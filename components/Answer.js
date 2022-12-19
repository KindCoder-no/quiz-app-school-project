export default function Answer({ color, data }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#0b5ed7",
          borderRadius: 10
        }}
      >
        <div className="card-body">
          <div className={"alert alert-" + color} role="alert">
            {data.question}
          </div>
          <p className="text-white">Riktig svar: {data.correctAnswer}</p>
          <p className="text-white">Ditt svar: {data.answer}</p>
          <br></br>
        </div>
      </div>
      <div className="mt-3"></div>
    </>
  );
}
