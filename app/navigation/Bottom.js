import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ComponentsScreen from '../screens/Components';
import HomeScreen from '../screens/home';
import Profile from '../screens/Profile';
import ProScreen from '../screens/Pro';
import SettingsScreen from '../screens/Settings';

import { Icon } from '../components';
import { materialTheme } from '../constants';

const HomeStack = createStackNavigator();

function homeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home" mode="card" headerMode="screen">
      <HomeStack.Screen name="Inicio" component={HomeScreen} />
      <HomeStack.Screen
        name="profile"
        component={Profile}
        options={{
          headerTintColor: 'white',
          headerTransparent: true
        }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileScreenStack = createStackNavigator();

function ProfileScreenStackScreen() {
  return (
    <ProfileScreenStack.Navigator mode="card" headerMode="none">
      <ProfileScreenStack.Screen name="profile" component={Profile} />
    </ProfileScreenStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function bottomTabsStack(props) {
  return (
    <Tab.Navigator
      mode="card"
      headerMode="none"
      // initialRouteName="Home"
      tabBarOptions={{
        showLabel: false
      }}>
      <Tab.Screen
        name="Home"
        component={homeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size={20}
              name="md-home"
              family="ionicon"
              color={focused ? materialTheme.COLORS.ACTIVE : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Tab.Screen
        name="Home1"
        component={homeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size={20}
              name="attach-money"
              family="material"
              color={focused ? materialTheme.COLORS.ACTIVE : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Tab.Screen
        name="Home2"
        component={homeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size={20}
              name="money"
              family="font-awesome"
              color={focused ? materialTheme.COLORS.ACTIVE : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Tab.Screen
        name="Home3"
        component={ProfileScreenStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size={20}
              name="user-o"
              family="font-awesome"
              color={focused ? materialTheme.COLORS.ACTIVE : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Tab.Screen
        name="Home4"
        component={ComponentsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size={20}
              name="user-o"
              family="font-awesome"
              color={focused ? materialTheme.COLORS.ACTIVE : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}
