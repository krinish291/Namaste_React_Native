import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TodoList = (props) => {
  return (
    <View style={styles.listContainer}>
      <Icon
        name="square"
        size={30}
        color="black"
        style={{marginLeft: 15}}
        onPress={props.setChecked}
      />
      <Text style={styles.listItem}>
        {props.checked && <View style={styles.verticalLine} />}
        <Text style={styles.listItem}>{props.text}</Text>
      </Text>
      <Icon
        name="trash-2"
        size={30}
        color="red"
        style={{marginLeft: 'auto'}}
        onPress={props.deleteTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    borderColor: '#aaaaaa',
    borderBottomWidth: 1.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
  },
  listItem: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    borderColor: 'green',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  verticalLine: {
    borderBottomColor: 'green',
    borderBottomWidth: 4,
    marginLeft: 10,
    width: '100%',
    position: 'absolute',
    marginTop: 15,
    fontWeight: 'bold',
  },
});

export default TodoList;
