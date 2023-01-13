export default function ShoppingListForm({
  body,
  onBodyChanged,
  onSubmit,
  isDone,
  onDoneChanged,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(body);
      }}
    >
      <input
        type="text"
        value={body}
        onChange={(e) => {
          onBodyChanged(e.target.value);
        }}
      />
      <label>
        <input
          checked={isDone}
          type="checkbox"
          onChange={(e) => onDoneChanged(e.target.checked)}
        />
      </label>
      <label>
        quantity
        <input type="text" />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}
