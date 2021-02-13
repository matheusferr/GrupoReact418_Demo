import React, { PureComponent } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import BottomTabs from './navigators/BottomTabs';

export default class Routes extends PureComponent {
  render() {
    return (
      <NavigationContainer theme={DarkTheme}>
        <BottomTabs />
      </NavigationContainer>
    );
  }
}
