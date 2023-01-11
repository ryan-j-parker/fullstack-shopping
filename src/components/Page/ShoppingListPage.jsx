import ShoppingList from './ShoppingList';
import ShoppingListForm from './ShoppingListForm';
import { Context } from '../ShoppingListProvider';
import { useContext, useEffect } from 'react';
import { getShoppingListItems } from '../../services/shopping-list-items';
import { 
  shoppingListLoadSuccessAction 
} from '../../actions/shopping-list-actions';

export default function ShoppingListPage() {
  // write handlers for props in ShoppingListForm.jsx

  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    (async () => {
      const items = await getShoppingListItems();
      console.log('items: ', items);
      const action = shoppingListLoadSuccessAction(items);
      dispatch(action);
    })();
  }, []);

  return (
    <>
      <section>
        <h1>My Shopping List</h1>
      </section>
      <ShoppingList shoppingList={state.shoppingList} />
      <ShoppingListForm
      // onBodyChanged={onBodyChanged}
      />
    </>
  );
}
