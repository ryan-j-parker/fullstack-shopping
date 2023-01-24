import {
  shoppingListLoadSuccessAction,
  shoppingListLoadStartAction,
  shoppingListLoadErrorAction,
  shoppingItemUpdated,
} from '../actions/shopping-list-actions';

import { 
  getShoppingListItems,
  updateShoppingItem,
} from '../services/shopping-list-items';

export const getShoppingListItemsEffect = async (dispatch) => {
  dispatch(shoppingListLoadStartAction());
  try {
    const items = await getShoppingListItems();
    dispatch(shoppingListLoadSuccessAction(items));
  } catch (e) {
    dispatch(shoppingListLoadErrorAction(e));
  }
};

export const updateShoppingItemEffect = async (dispatch, item) => {
  try {
    const updatedItem = await updateShoppingItem(item.id, item);
    dispatch(shoppingItemUpdated(updatedItem));
  } catch (e) {
    dispatch(shoppingListLoadErrorAction(e));
  }
};


