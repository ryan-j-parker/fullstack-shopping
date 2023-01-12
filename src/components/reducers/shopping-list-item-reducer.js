export const initialState = () => {
  return {
    loadingMode: 'idle',
    loadingError: null,
    itemCandidateBody: '',
    shoppingList: [],
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

    default:
      return state;
  }
};
