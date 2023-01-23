import ShoppingItem from './ShoppingItem';

export default function ShoppingList({
  shoppingList,
  onDoneChanged,
  onItemUpdated,
  onItemDeleted,
  // updateShoppingItem,
  // deleteShoppingItem,
  // getShoppingListItemsEffect,
  // dispatch,
  // shoppingItemUpdated,
  // shoppingItemDeleted,
}) {
  return (
    <ol>
      {shoppingList.map((item) => {
        return (
          <li key={item.id}>
            <ShoppingItem
              item={item}
              onDoneChanged={(done) => onDoneChanged(item.id, done)}
              quantity={(quantity) => quantity(item.id, quantity)}
              // onItemUpdated={async (id, item) => {
              //   await updateShoppingItem(id, item);
              //   getShoppingListItemsEffect(dispatch);
              //   dispatch(shoppingItemUpdated);
              // }}
              // onItemDeleted={async (id) => {
              //   await deleteShoppingItem(id);
              //   getShoppingListItemsEffect(dispatch);
              //   dispatch(shoppingItemDeleted);
              // }}
              onItemUpdated={onItemUpdated}
              onItemDeleted={onItemDeleted}
            />
            <button
              type="submit"
              onClick={() => {
                onItemUpdated(item.id, {
                  done: !item.done,
                });
              }}
            >
              update
            </button>
            <button 
              type="submit" 
              // onClick={() => onItemDeleted(item)}
              onClick={() => {
                onItemDeleted(item.id);
              }}

            >
              delete
            </button>
            ;
          </li>
        );
      })}
    </ol>
  );
}
