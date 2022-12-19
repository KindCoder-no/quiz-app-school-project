export default function QuestionFormItem({ title, index, updateQuestion }) {
  return (
    <>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label text-white">
          {title}
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => updateQuestion(index, "Title", e.target.value)}
        />
      </div>
    </>
  );
}
