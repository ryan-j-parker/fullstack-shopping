import ShoppingList from './ShoppingList';
import ShoppingListForm from './ShoppingListForm';
import { Context } from '../ShoppingListProvider';
import { useContext, useEffect } from 'react';
import {
  createShoppingListItem,
  updateShoppingItem,
  deleteShoppingItem,
} from '../../services/shopping-list-items';
import {
  shoppingItemCandidateBodyChanged,
  shoppingItemCandidateDoneChanged,
  shoppingItemCandidateQuantityChanged,
  shoppingItemDeleted,
  shoppingItemUpdated,
} from '../../actions/shopping-list-actions';
import { 
  getShoppingListItemsEffect 
} from '../../effects/shopping-list-effects';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    getShoppingListItemsEffect(dispatch);
  }, []);

  const handleUpdateChange = (id, done) => {
    dispatch(shoppingItemUpdated(id, done));
    updateShoppingItem(dispatch, id, done);
  };

  return (
    <>
      <section>
        <h1>My Shopping List:</h1>
      </section>
      <br />
      {state.loadingMode === 'loading' ? (
        <span>loading items...</span>
      ) : (
        <ShoppingList
          data-testid={'shopping-list'}
          shoppingList={state.shoppingList}
          onDoneChanged={handleUpdateChange}
          onItemUpdated={async (id, item) => {
            await updateShoppingItem(id, item);
            getShoppingListItemsEffect(dispatch);
            dispatch(shoppingItemUpdated);
          }}
          onItemDeleted={async (id) => {
            await deleteShoppingItem(id);
            getShoppingListItemsEffect(dispatch);
            dispatch(shoppingItemDeleted);
          }}
        />
      )}
      <br />
      <div>Add an item: </div>
      <ShoppingListForm
        body={state.itemCandidateBody}
        onBodyChanged={(body) => {
          dispatch(shoppingItemCandidateBodyChanged(body));
        }}
        isDone={state.isDone}
        onDoneChanged={(done) => {
          dispatch(shoppingItemCandidateDoneChanged(done));
        }}
        onQuantityChanged={(quantity) => {
          dispatch(shoppingItemCandidateQuantityChanged(quantity));
        }}
        onSubmit={async (body) => {
          await createShoppingListItem({
            item_name: body,
            quantity: state.quantity,
            done: state.isDone,
          });
          getShoppingListItemsEffect(dispatch);
          dispatch(shoppingItemCandidateBodyChanged(''));
        }}
      />
    </>
  );
}
