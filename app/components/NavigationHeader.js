import React from 'react';
import { StatusBar, Image } from 'react-native';
import { Icon, Body, Header, Left, Right } from 'native-base';
import headerStyle from '../styles/SideMenu.style';

const logoImagePath = require('../assets/images/icons/nasa_insignia.png');

export default class NavigationHeader extends React.Component {
  constructor(props) {
    super(props);
    this.logoImagePath = logoImagePath;
  }

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
            source={this.logoImagePath}
            style={headerStyle.nasaInsigniaStyle}
          />
        </Right>
      </Header>
    );
  }
}
