import {connect} from 'react-redux';
import {setTodoList} from '../../Actions/TodoActions';
import TodoApp from '../../Screen/Component/TodoApp';

const mapStateToProps = (state) => {
  const {todoList = []} = state.todoList;
  return {
    todoList,
  };
};

export default connect(mapStateToProps, {setTodoList})(TodoApp);
