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
        type="checkbox"
        checked={isDone}
        // onChange={(e) =>
        //   isDone(e.target.checked)}
        //         onChange={(done) => {
        //   onDoneChanged(item.id, done);
        // }}
        onChange={(done) => onDoneChanged(item.id, done)}
      />
    </div>
  );
}
