import {SET_TODOLIST} from './Keys';

export const setTodoList = (todoList) => ({
  type: SET_TODOLIST,
  payload: todoList,
});
