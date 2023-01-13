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

export const shoppingItemCandidateDoneChanged = (done) => {
  return {
    done,
    type: 'shopping-item-candidate-done-changed',
  };
};
