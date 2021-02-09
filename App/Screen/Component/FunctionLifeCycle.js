import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

const FunctionLifeCycle = () => {
  const [count, setCount] = useState(1);
  useEffect(
    function () {
      console.log('useEffect call...');
      return function cleanup() {
        console.log('useEffect cleanup call...');
      };
    },
    [count <= 5], // if not pass  second argument work as componentDidUpdate
  );

  const add = () => {
    console.log('add call...');
    setCount(count + 1);
  };

  return (
    <View style={styles.main}>
      <Button title="Add" onPress={add} />
      <Text>Count: {count}</Text>
    </View>
  );
};

export default FunctionLifeCycle;
