import React from 'react';
import { Provider } from 'react-redux';
import Main from './app/main';
import configureStore from './app/configureStore'

let store = configureStore()
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>

    );
  }
}