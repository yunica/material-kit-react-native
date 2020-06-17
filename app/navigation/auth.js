import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={Login} options={{ title: 'Sign In' }} />
    <AuthStack.Screen
      name="CreateAccount"
      component={Login}
      options={{
        title: 'Create Account',
        headerTransparent: true
      }}
    />
    <AuthStack.Screen
      name="ForgotPassword"
      component={Login}
      options={{
        title: 'Forgot Password',
        headerTransparent: true
      }}
    />
  </AuthStack.Navigator>
);
export default AuthStackScreen;
