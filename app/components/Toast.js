import React from 'react';
// import { connect } from 'react-redux';
// import { Toast } from 'galio-framework';
import { ToastAndroid } from 'react-native'


 const Toast = props => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(
            props.message,
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50
        );
        return null;
    }
    return null;
};

export default Toast;