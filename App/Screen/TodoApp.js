import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoList from '../SubComponent/TodoList';
import {Keyboard} from 'react-native';
import CustomInput from '../SubComponent/CustomInput';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  addTodo = (value) => {
    if (value.length > 0) {
      Keyboard.dismiss();
      setTodoList([{text: value, key: Date.now()}, ...todoList]);
    }
  };

  deleteTodo = (id) => {
    setTodoList(
      todoList.filter((todo) => {
        if (todo.key !== id) return true;
      }),
    );
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
