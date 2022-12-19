export default function Answer({ color, data }) {
  return (
    <>
      <div
        style={{
          background: "rgb(0,212,255)",
          background:
            "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(15,15,168,1) 50%, rgba(11,3,181,1) 100%)",
          borderRadius: 10
        }}
      >
        <div className="card-body">
          <p style={{ color: color }}>{data.question}</p>
          <p className="text-white">Riktig svar: {data.correctAnswer}</p>
          <p className="text-white">Ditt svar: {data.answer}</p>
        </div>
      </div>
      <div className="mt-3"></div>
    </>
  );
}
