export default function ShoppingItem({ item, onDoneChanged }) {
  return (
    <div>
      {item.item_name}
      {item.quantity}
      {item.done}
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          onDoneChanged(e.target.checked);
        }}
      />
    </div>
  );
}
