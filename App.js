/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Body
} from 'native-base';

import Routes from './app/routing/routes';

export default class App extends React.Component {
  componentDidMount() {
    // StatusBar.setHidden(true);
  }

  render() {
    return <Routes />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
