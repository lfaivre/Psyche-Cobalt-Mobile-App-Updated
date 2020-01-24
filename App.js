/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Routes from './app/routing/routes';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested' // TODO: Remove when fixed
]);

export default class App extends React.Component {
  componentDidMount() {
    // StatusBar.setHidden(true);
  }

  render() {
    return <Routes />;
  }
}
