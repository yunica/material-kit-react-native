import React from 'react';
import { Platform, StatusBar, Image } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Block, GalioProvider, Toast, Button } from 'galio-framework';

import { Images, products, materialTheme } from './constants/';

import { NavigationContainer } from '@react-navigation/native';
import Screens from './navigation/Bottom';

// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens';
enableScreens();

// cache app images
const assetImages = [
  Images.Pro,
  Images.Profile,
  Images.Avatar,
  Images.Onboarding,
];

// cache product images
products.map(product => assetImages.push(product.image));

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class Main extends React.Component {
  state = {
    isLoadingComplete: false,
    isShow: false,

  };
  setShow(isShow) {
    console.warn(isShow)
    this.setState({
      isShow: !isShow
    })
  }
  render() {
    const { isShow } = this.state;

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <NavigationContainer>
          <GalioProvider theme={materialTheme}>
            <Block flex>
              <Button shadowless onPress={() => this.setShow(isShow)} style={{ marginBottom: 80 }}>click here for toast notifications</Button>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <Screens />
              <Toast isShow={this.state.isShow} positionIndicator="top"  fadeInDuration={600}  fadeOutDuration={600} round color='error' textStyle={{ color: 'white' }}>This is a top positioned toast</Toast>
            </Block>
          </GalioProvider>
        </NavigationContainer>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      ...cacheImages(assetImages),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
