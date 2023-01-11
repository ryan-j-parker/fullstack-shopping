export const initialState = () => {
  return {
    shoppingList: [
      {
        id: 3,
        item_name: 'Milk',
        quantity: 173,
        done: true,
      },
    ],
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'shopping-list-load-success':
      return {
        ...state,
        shoppingList: action.shoppingList,
      };

    default:
      return state;
  }
};
