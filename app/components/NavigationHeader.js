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

import headerStyle from '../styles/SideMenu.style';

export default class NavigationHeader extends React.Component {
  // componentDidMount() {
  //   this.props.navigation.openDrawer();
  //   this.props.navigation.closeDrawer();
  // }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    return (
      <Header style={headerStyle.homeSectionHeadingStyle}>
        <Left>
          <Icon
            style={headerStyle.navIconStyle}
            name="ios-menu"
            onPress={() => this.props.navigation.openDrawer()}
          />
        </Left>
        <Body></Body>
        <Right>
          <Image
            source={require('../assets/images/icons/nasa_insignia.png')}
            style={headerStyle.nasaInsigniaStyle}
          />
        </Right>
      </Header>
    );
  }
}
