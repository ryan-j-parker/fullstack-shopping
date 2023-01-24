export const reducerLogger = (reducer) => {
  return (state, action) => {
    console.info('Starting state: ', state);
    console.info('Current action: ', action);
    const newState = reducer(state, action);
    console.info('Current state: ', newState);
    return newState;
  };
};
