export default function ShoppingItem({ item }) {
  return (
    <div>
      <ol>
        {/* {item.id} */}
        <li>{item.item_name}</li>
        <li>{item.quantity}</li>
        <li>{item.done}</li>
      </ol>
    </div>
  );
}
