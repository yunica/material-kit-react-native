import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStackScreen from './auth';
import AppScreams from './Bottom';

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen
      name="Auth"
      component={AuthStackScreen}
      options={{
        animationEnabled: false
      }}
    />
    <RootStack.Screen
      name="App"
      component={AppScreams}
      options={{
        animationEnabled: true
      }}
    />
  </RootStack.Navigator>
);

export default () => {
  return <RootStackScreen />;
};
