export default function AnswerFormItem({ index, updateQuestion }) {
  return (
    <>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Svaralternativ 1
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => {
            updateQuestion(index, "Answer", e.target.value, 0);
          }}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Svaralternativ 2
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => {
            updateQuestion(index, "Answer", e.target.value, 1);
          }}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Svaralternativ 3
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => {
            updateQuestion(index, "Answer", e.target.value, 2);
          }}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Svaralternativ 4
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => {
            updateQuestion(index, "Answer", e.target.value, 3);
          }}
        />
      </div>
      <div class="mb-3">
        <label for="select" class="form-label">
          Riktig svar:
        </label>
        <select
          class="form-select"
          id="select"
          onChange={(e) => {
            updateQuestion(index, "Correct", e.target.value);
          }}
        >
          <option value={0} selected>
            1
          </option>
          <option value={1}>2</option>
          <option value={2}>3</option>
          <option value={3}>4</option>
        </select>
      </div>
    </>
  );
}
