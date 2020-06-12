import React, { Component } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';

export default class CustomToast extends Component {
  constructor() {
    super();
    this.animateOpacityValue = new Animated.Value(0);
    this.state = {
      ShowToast: false
    };
    this.ToastMessage = '';
  }

  componentWillUnmount() {
    this.timerID && clearTimeout(this.timerID);
  }

  ShowToastFunction(message = 'Custom React Native Toast', duration = 1500) {
    this.ToastMessage = message;

    this.setState({ ShowToast: true }, () => {
      Animated.timing(this.animateOpacityValue, {
        toValue: 1,
        duration: 500
      }).start(this.HideToastFunction(duration));
    });
  }

  HideToastFunction = (duration) => {
    this.timerID = setTimeout(() => {
      Animated.timing(this.animateOpacityValue, {
        toValue: 0,
        duration: 500
      }).start(() => {
        this.setState({ ShowToast: false });
        clearTimeout(this.timerID);
      });
    }, duration);
  };

  render() {
    const { position, backgroundColor, textColor } = this.props;
    if (this.state.ShowToast) {
      return (
        <Animated.View
          style={[
            styles.animatedToastView,
            {
              opacity: this.animateOpacityValue,
              top: position === 'top' ? '10%' : '80%',
              backgroundColor
            }
          ]}>
          <Text numberOfLines={1} style={[styles.ToastBoxInsideText, { color: textColor }]}>
            {this.ToastMessage}
          </Text>
        </Animated.View>
      );
    }

    return null;
  }
}

CustomToast.propTypes = {
  backgroundColor: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom']),
  textColor: PropTypes.string
};

CustomToast.defaultProps = {
  backgroundColor: '#f00',
  textColor: '#FFFFFF',
  position: 'top'
};

const styles = StyleSheet.create({
  animatedToastView: {
    marginHorizontal: 30,
    paddingHorizontal: 25,
    paddingVertical: 10,

    borderRadius: 25,
    zIndex: 9999,
    position: 'absolute',
    justifyContent: 'center'
  },
  ToastBoxInsideText: {
    fontSize: 15,
    alignSelf: 'stretch',
    textAlign: 'center'
  }
});
