import { combineReducers } from 'redux';
import counter from './counter';
import todoReducer from './todos';

const rootReducer = combineReducers({
  counter,
  todoReducer,
});

export default rootReducer;
