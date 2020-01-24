import React from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import {
  Icon,
  Button,
  Container,
  Body,
  Header,
  Content,
  Left,
  Right
} from 'native-base';
import NavigationHeader from '../components/NavigationHeader.js';
import headerStyle from '../styles/SideMenu.style';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        {/* Display the header, including access to the navigation menu */}
        <NavigationHeader {...this.props} />
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        ></Content>
      </Container>
    );
  }
}
