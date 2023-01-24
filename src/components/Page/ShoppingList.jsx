import ShoppingItem from './ShoppingItem';

export default function ShoppingList({
  shoppingList,
  onDoneChanged,
  onItemUpdated,
  onItemDeleted,
}) {
  return (
    <ol>
      {shoppingList.map((item) => {
        return (
          <li key={item.id} data-testid={`shopping-item-${item.id}`}s>
            <ShoppingItem
              item={item}
              onDoneChanged={(done) => onDoneChanged(item.id, done)}
              quantity={(quantity) => quantity(item.id, quantity)}
              onItemUpdated={onItemUpdated}
              onItemDeleted={onItemDeleted}
            />
            <span>
              <button
                data-testid={`shopping-list-update-${item.id}`}
                type="submit"
                onClick={() => {
                  onItemUpdated(item.id, {
                    done: !item.done,
                  });
                }}
              >
                update{' '}
              </button>
              <br />
              <button
                data-testid={`shopping-list-delete-${item.id}`}
                type="submit"
                onClick={() => {
                  onItemDeleted(item.id);
                }}
              >
                delete{' '}
              </button>
            </span>
          </li>
        );
      })}
    </ol>
  );
}
