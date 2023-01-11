import { createContext, useReducer } from 'react';
import {
  initialState,
  reducer,
} from './reducers/shopping-list-item-reducer.js';

export const Context = createContext({
  state: initialState(),
  reducer,
});

export const ShoppingListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
