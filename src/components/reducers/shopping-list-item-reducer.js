export const initialState = () => {
  return {
    loadingMode: 'idle',
    loadingError: null,
    itemCandidateBody: '',
    shoppingList: [],
    isDone: false,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'shopping-list-load-success':
      return {
        ...state,
        loadingMode: 'idle',
        shoppingList: action.shoppingList,
      };

    case 'shopping-list-load-start':
      return {
        ...state,
        loadingMode: 'loading',
      };

    case 'shopping-list-load-error':
      return {
        ...state,
        loadingMode: 'error',
        loadingError: action.error,
      };

    case 'shopping-item-candidate-body-changed':
      return {
        ...state,
        itemCandidateBody: action.body,
      };

    case 'shopping-item-candidate-done-changed':
      return {
        ...state,
        isDone: action.done,
      };

    default:
      return state;
  }
};
