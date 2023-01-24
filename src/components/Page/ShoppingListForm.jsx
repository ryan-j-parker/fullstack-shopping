export default function ShoppingListForm({
  body,
  onBodyChanged,
  onQuantityChanged,
  onSubmit,
  isDone,
  onDoneChanged,
  id,
}) {
  return (
    <form
      data-testid={`shopping-list-form-${id}`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(body);
      }}
    >
      <label>
        Item:{' '}
        <input
          data-testid={`shopping-list-form-input-${id}`}
          type="text"
          value={body}
          onChange={(e) => {
            onBodyChanged(e.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Quantity:{' '}
        <input
          data-testid={`shopping-list-form-quantity-${id}`}
          type="number"
          onChange={(e) => {
            onQuantityChanged(e.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Done?{' '}
        <input
          data-testid={`shopping-list-form-done-${id}`}
          checked={isDone}
          type="checkbox"
          onChange={(e) => onDoneChanged(e.target.checked)}
        />
      </label>
      <button 
        data-testid={`shopping-list-form-button-${id}`} 
        type="submit"
      >
        submit
      </button>
    </form>
  );
}
