import {SET_TODOLIST} from '../Actions/Keys';
import DefaultState from './Default';

const INIT_STATE = DefaultState.todoList;

const TodoListReducer = (state = INIT_STATE, action) => {
  console.log('-->', action);
  switch (action.type) {
    case SET_TODOLIST:
      return [...state, {todoList: action.payload}];
    default:
      return state;
  }
};

export default TodoListReducer;
