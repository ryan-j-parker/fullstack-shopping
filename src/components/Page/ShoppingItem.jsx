export default function ShoppingItem({ item }) {
  return (
    <div>
      {item.item_name}
      {item.quantity}
      {item.done}
    </div>
  );
}
