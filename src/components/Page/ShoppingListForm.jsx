export default function ShoppingListForm({
  body,
  onBodyChanged,
  onQuantityChanged,
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
      <label>
        Item: {' '}
        <input
          type="text"
          value={body}
          onChange={(e) => {
            onBodyChanged(e.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Quantity: {' '}
        <input
          type="text"
          onChange={(e) => {
            onQuantityChanged(e.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Done? {' '}
        <input
          checked={isDone}
          type="checkbox"
          onChange={(e) => onDoneChanged(e.target.checked)}
        />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}
