export const shoppingListLoadSuccessAction = (shoppingList) => {
  return {
    type: 'shopping-list-load-success',
    shoppingList,
  };
};

export const shoppingListLoadStartAction = () => {
  return {
    type: 'shopping-list-load-start',
  };
};

export const shoppingListLoadErrorAction = (error) => {
  return {
    type: 'shopping-list-load-error',
    error,
  };
};

export const shoppingItemCandidateBodyChanged = (body) => {
  return {
    body,
    type: 'shopping-item-candidate-body-changed',
  };
};

export const shoppingItemCandidateDoneChanged =  (done) => {
  return {
    done,
    type: 'shopping-item-candidate-done-changed',
  };
};

export const shoppingItemCandidateQuantityChanged = (quantity) => {
  return {
    quantity,
    type: 'shopping-item-candidate-quantity-changed',
  };
};

export const shoppingItemUpdated = (item) => {
  return {
    item,
    type: 'shopping-item-updated',
  };
};

export const shoppingItemDeleted = (item) => {
  return {
    item,
    type: 'shopping-item-deleted',
  };
};
