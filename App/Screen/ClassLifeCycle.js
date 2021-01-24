import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
class ClassLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
    console.log('Class constructor call...');
  }

  componentDidMount() {
    console.log('componentDidMount call..');
  }

  add = () => {
    console.log('add call...');
    this.setState({
      count: this.state.count + 1,
    });
  };

  shouldComponentUpdate(props, state) {
    console.log('shouldComponentUpdate call...');
    return true; // return false (not call render and componentDidUpdate)
  }

  componentDidUpdate(preState) {
    console.log('componentDidUpdate call..');
    // don't setState  here
  }

  componentWillUnmount() {
    console.log('componentWillUnmount call..');
  }

  render() {
    const title = this.state.message;
    console.log('render call...');
    return (
      <View style={styles.main}>
        <Button title="Add" onPress={this.add} />
        <Text>Count: {this.state.count}</Text>
      </View>
    );
  }
}
// mounts
// constructor call...
// render call...
// componentDidMount call..

// update
// shouldComponentUpdate call...
// render call...
// componentDidUpdate call...

// unmount
// componentWillUnMount call...

export default ClassLifeCycle;
