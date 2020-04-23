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

// NOTE :: DEVELOPMENT ONLY
import { YellowBox, View } from 'react-native';
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: REMOVE WHEN FIXED
]);

// NOTE :: REMOVE ScreenOrientation BEFORE NATIVE BUILD
import { ScreenOrientation } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    // NOTE :: REMOVE ScreenOrientation BEFORE NATIVE BUILD
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );

    await Font.loadAsync({
      Roboto: require('./app/assets/fonts/Roboto-Regular.ttf'),
      RobotoLight: require('./app/assets/fonts/Roboto-Light.ttf'),
      RobotoMedium: require('./app/assets/fonts/Roboto-Medium.ttf'),
      RobotoThin: require('./app/assets/fonts/Roboto-Thin.ttf'),
      RobotoBold: require('./app/assets/fonts/Roboto-Bold.ttf'),
      BungeeRegular: require('./app/assets/fonts/Bungee-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    // TODO :: ADD LOADING COMPONENT INSTEAD OF EMPTY VIEW
    return this.state.fontLoaded ? <Routes /> : <View></View>;
  }
}
