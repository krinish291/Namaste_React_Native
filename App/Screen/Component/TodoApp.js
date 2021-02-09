import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import TodoList from '../SubComponent/TodoList';
import {Keyboard} from 'react-native';
import CustomInput from '../SubComponent/CustomInput';
import setTodoList from '../../Actions/TodoActions';

export default function TodoApp() {
  const dispatch = useDispatch();
  const todoList = this.props;

  useEffect(() => {}, []);

  addTodo = (value) => {
    if (value.length > 0) {
      Keyboard.dismiss();
      console.log(value);
      dispatch(setTodoList({text: value, key: Date.now()}));
    }
  };

  deleteTodo = (id) => {
    //   setTodoList(
    //     todoList.filter((todo) => {
    //       if (todo.key !== id) return true;
    //     }),
    //   );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <CustomInput
        placeHolder={'What do you want to do today?'}
        textValue={addTodo}></CustomInput>
      <TodoList data={todoList} deleteTodo={deleteTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  header: {
    marginTop: '15%',
    fontSize: 20,
    color: 'red',
    paddingBottom: 10,
  },
});
