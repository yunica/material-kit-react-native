import React from 'react';
import { Alert, Dimensions, KeyboardAvoidingView, StatusBar, ImageBackground } from 'react-native';
import { Block, Button, Input, Text, theme } from 'galio-framework';

import materialTheme from '../../constants/Theme';
import Images from '../../constants/Images';

import styles from './style';

const { width } = Dimensions.get('window');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '-',
      password: '-'
    };
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
      <Block flex style={{ backgroundColor: theme.COLORS.BLACK }}>
        <StatusBar barStyle="light-content" />
        <Block flex center>
          <ImageBackground source={{ uri: Images.Onboarding }} style={styles.image}>
            <Block flex space="between" style={styles.padded}>
              <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
                <Block flex space="around" style={{ zIndex: 2 }}>
                  <Block>
                    <Text color="white" size={60}>
                      Material
                    </Text>
                    <Text size={16} color="rgba(255,255,255,0.6)">
                      Fully coded React Native components.
                    </Text>
                  </Block>
                </Block>
                <Block flex={2} center style={{ zIndex: 3 }} space="evenly">
                  <Block flex top style={{ marginBottom: 2 }}>
                    <Input
                      rounded
                      type="email-address"
                      placeholder="Email"
                      autoCapitalize="none"
                      color={theme.COLORS.BLACK}
                      style={{ width: width * 0.9 }}
                      onChangeText={(text) => this.handleChange('email', text)}
                    />
                    <Input
                      rounded
                      password
                      viewPass
                      color={theme.COLORS.BLACK}
                      placeholder="Password"
                      style={{ width: width * 0.9 }}
                      onChangeText={(text) => this.handleChange('password', text)}
                    />
                    <Text
                      color={theme.COLORS.WHITE}
                      size={theme.SIZES.FONT * 0.75}
                      onPress={() => navigation.navigate('ForgotPassword')}
                      style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT * 2 }}>
                      Forgot your password?
                    </Text>
                  </Block>
                  <Block flex>
                    <Button
                      round
                      color={materialTheme.COLORS.BUTTON_COLOR}
                      onPress={() => navigation.push('App')}>
                      Sign in
                    </Button>
                    <Button
                      color="transparent"
                      shadowless
                      onPress={() => navigation.navigate('CreateAccount')}>
                      <Text center color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 0.75}>
                        Don't have an account? Sign Up
                      </Text>
                    </Button>
                  </Block>
                </Block>
              </KeyboardAvoidingView>
            </Block>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

export default Login;
