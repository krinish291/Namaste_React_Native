import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TodoList = ({data, deleteTodo}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>{item.text}</Text>
        <Icon
          name="trash-2"
          size={30}
          color="red"
          style={styles.delete}
          onPress={() => {
            deleteTodo(item.key);
          }}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(data, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  listItem: {
    flex: 1,
    paddingLeft: 20,
    marginTop: 6,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  delete: {marginLeft: 'auto', marginHorizontal: 10},
});

export default TodoList;
