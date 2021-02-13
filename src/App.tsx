import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { Provider, DarkTheme } from 'react-native-paper';
import Routes from './routes';

export default class App extends PureComponent {
  render() {
    return (
      <Provider theme={DarkTheme}>
        <StatusBar animated barStyle="light-content" backgroundColor="#000" />
        <Routes />
      </Provider>
    );
  }
}
