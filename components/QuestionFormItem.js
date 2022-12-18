export default function QuestionFormItem({ title, index, updateQuestion }) {
  return (
    <>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          {title}
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => updateQuestion(index, "Title", e.target.value)}
        />
      </div>
    </>
  );
}
