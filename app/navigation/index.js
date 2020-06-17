import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStackScreen from './auth';
import AppScreams from './Bottom';

const RootStack = createStackNavigator();

class Login extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <RootStack.Navigator headerMode="none">
        {user.user ? (
          <RootStack.Screen
            name="App"
            component={AppScreams}
            options={{
              animationEnabled: true
            }}
          />
        ) : (
          <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
              animationEnabled: true
            }}
          />
        )}
      </RootStack.Navigator>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth
  };
};

export default connect(mapStateToProps)(Login);
