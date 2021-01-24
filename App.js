import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ClassLifeCycle from './App/Screen/ClassLifeCycle';
import FunctionLifeCycle from './App/Screen/FunctionLifeCycle';

const Tab = createMaterialBottomTabNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App constructor call');
  }

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Class" component={ClassLifeCycle} />
            <Tab.Screen name="Function" component={FunctionLifeCycle} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
export default App;
