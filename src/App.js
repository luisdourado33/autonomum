/**
 * Autonomum App
 * https://github.com/luisdourado33/Autonomum
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Page import
import RootStackScreen from './pages/navigation/RootStackScreen';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default App;
