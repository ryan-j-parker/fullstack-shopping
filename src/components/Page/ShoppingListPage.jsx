import ShoppingList from './ShoppingList';
import ShoppingListForm from './ShoppingListForm';
import { Context } from '../ShoppingListProvider';
import { useContext, useEffect } from 'react';
import { createShoppingListItem } from '../../services/shopping-list-items';
import { 
  shoppingItemCandidateBodyChanged, 
} from '../../actions/shopping-list-actions';
import { 
  getShoppingListItemsEffect, 
} from '../../effects/shopping-list-effects';

export default function ShoppingListPage() {
  // write handlers for props in ShoppingListForm.jsx

  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    getShoppingListItemsEffect(dispatch);
  }, []);

  return (
    <>
      <section>
        <h1>My Shopping List</h1>
      </section>
      {state.loadingMode === 'loading' ? (
        <span>loading items...</span>
      ) : (
        <ShoppingList shoppingList={state.shoppingList} />
      )}
      <ShoppingListForm
        // onBodyChanged={onBodyChanged}
        body={state.itemCandidateBody}
        onBodyChanged={(body) => {
          dispatch(shoppingItemCandidateBodyChanged(body));
        }}
        onSubmit={async (body) => {
          await createShoppingListItem({
            item_name: body,
            quantity: 0,
            done: false,
          });
          getShoppingListItemsEffect(dispatch);
          dispatch(shoppingItemCandidateBodyChanged(''));
        }}
      />
    </>
  );
}
