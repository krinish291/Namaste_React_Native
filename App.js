import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store, persistor} from './App/Stores';
import ClassLifeCycle from './App/Screen/Component/ClassLifeCycle';
import FunctionLifeCycle from './App/Screen/Component/FunctionLifeCycle';
import TodoApp from './App/Screen/Container/TodoAppContainer';
import {PersistGate} from 'redux-persist/integration/react';

const Tab = createMaterialBottomTabNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App constructor call');
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen name="Class" component={ClassLifeCycle} />
                <Tab.Screen name="TodoApp" component={TodoApp} />
                <Tab.Screen name="Function" component={FunctionLifeCycle} />
              </Tab.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
