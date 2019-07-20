import { createStore } from 'redux';
import mainReducer from './mainReducer';

export default initialState => {
  const store = createStore(mainReducer, initialState);
  return store;
};
