/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Routes from './app/routing/routes';
import * as Font from 'expo-font';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested' // TODO: Remove when fixed
]);

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('./app/assets/fonts/Roboto-Regular.ttf'),
      RobotoLight: require('./app/assets/fonts/Roboto-Light.ttf'),
      RobotoMedium: require('./app/assets/fonts/Roboto-Medium.ttf'),
      RobotoThin: require('./app/assets/fonts/Roboto-Thin.ttf'),
      RobotoBold: require('./app/assets/fonts/Roboto-Bold.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    // TODO: Add loading component, use instead of null
    return this.state.fontLoaded ? <Routes /> : null;
  }
}
