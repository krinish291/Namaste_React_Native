import {takeLatest} from 'redux-saga/effects';
import {GET_TODOLIST} from '../Actions/Keys';
import {getTodoListSaga} from './TodoListSaga';

export default function* rootSaga() {
  yield takeLatest(GET_TODOLIST, getTodoListSaga);
}
