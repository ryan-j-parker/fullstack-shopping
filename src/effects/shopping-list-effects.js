import {
  shoppingListLoadSuccessAction,
  shoppingListLoadStartAction,
  shoppingListLoadErrorAction,
} from '../actions/shopping-list-actions';

import { getShoppingListItems } from '../services/shopping-list-items';

export const getShoppingListItemsEffect = async (dispatch) => {
  dispatch(shoppingListLoadStartAction());
  try {
    const items = await getShoppingListItems();
    dispatch(shoppingListLoadSuccessAction(items));
  } catch (e) {
    dispatch(shoppingListLoadErrorAction(e));
  }
};
