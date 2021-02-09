import {combineReducers} from 'redux';
import TodoListReducer from './TodoListReducer';

export default combineReducers({
  todoList: TodoListReducer,
});
