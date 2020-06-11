import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ComponentsScreen from '../screens/Components';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/Profile';
import ProScreen from '../screens/Pro';
import SettingsScreen from '../screens/Settings';


import { Icon } from '../components';
import { materialTheme } from "../constants/";



const HomeStack = createStackNavigator();

function homeStackScreen() {
    return (
        <HomeStack.Navigator initialRouteName="Home" mode="card" headerMode="screen">
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="profile" component={ProfileScreen}
                options={{
                    headerTintColor: 'white',
                    headerTransparent: true
                }} />
        </HomeStack.Navigator>
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
            }}
        >
            <Tab.Screen
                name='Home'
                component={homeStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            size={20}
                            name="shop"
                            family="GalioExtra"
                            color={focused ? materialTheme.COLORS.ACTIVE : materialTheme.COLORS.MUTED}
                        />

                    )
                }}
            />
        </Tab.Navigator>
    );
}