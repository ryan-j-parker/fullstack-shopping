import { createContext, useReducer } from 'react';
import {
  initialState,
  reducer,
} from './reducers/shopping-list-item-reducer.js';
import { reducerLogger } from './reducers/reducer-logger.js';

export const Context = createContext({
  state: initialState(),
  reducer,
});

export const ShoppingListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducerLogger(reducer),
    initialState(),
  );

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
