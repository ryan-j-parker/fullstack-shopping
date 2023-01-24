export default function ShoppingItem({
  item,
  onDoneChanged,
  isDone,
}) {
  return (
    <div>
      <span>
        {item.item_name} - qty: {item.quantity} {item.done}
      </span>
      <input
        data-testid={`shopping-item-done-${item.id}`}
        type="checkbox"
        checked={isDone}
        onChange={(done) => onDoneChanged(item.id, done)}
      />
    </div>
  );
}
