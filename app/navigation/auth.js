import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="CreateAccount" component={Login} />
    <AuthStack.Screen name="ForgotPassword" component={Login} />
  </AuthStack.Navigator>
);
export default AuthStackScreen;
