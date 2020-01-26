import React from 'react';
import { StatusBar, Image } from 'react-native';
import { Icon, Body, Header, Left, Right } from 'native-base';

import headerStyle from '../styles/SideMenu.style';

export default class NavigationHeader extends React.Component {
  render() {
    return (
      <Header style={headerStyle.homeSectionHeadingStyle}>
        <StatusBar hidden={true} />
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
