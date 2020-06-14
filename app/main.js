import React, { Component } from 'react';
import { Platform, StatusBar, Image } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Block, GalioProvider } from 'galio-framework';
import { connect } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { Images, products, materialTheme } from './constants';
import CustomToast from './components/Toast';
import Screens from './navigation/Bottom';

// Before rendering any navigation stack

enableScreens();

// cache app images
const assetImages = [Images.Pro, Images.Profile, Images.Avatar, Images.Onboarding];

// cache product images
products.map((product) => assetImages.push(product.image));

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.uix && nextProps.uix.isToast) {
      this.refs.errorToast.ShowToastFunction(nextProps.uix.toastMessage);
    }
  }

  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <NavigationContainer>
        <GalioProvider theme={materialTheme}>
          <Block flex>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <Screens />
            <CustomToast ref="errorToast" />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    );
  }

  loadResourcesAsync = async () => {
    return Promise.all([...cacheImages(assetImages)]);
  };

  handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const mapStateToProps = (state) => {
  return {
    uix: state.ui
  };
};

export default connect(mapStateToProps)(Main);
