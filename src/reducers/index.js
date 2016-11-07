import { combineReducers } from 'redux';
import * as todos from './todos';

console.log(`todos is ${JSON.stringify(todos, null, 2)}`);

export default combineReducers({
  todos
});