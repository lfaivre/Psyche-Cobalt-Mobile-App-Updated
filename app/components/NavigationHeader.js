import React from 'react';
import { Image } from 'react-native';
import { Icon, Body, Header, Left, Right } from 'native-base';

import headerStyle from '../styles/SideMenu.style';

export default class NavigationHeader extends React.Component {
  // componentDidMount() {
  //   this.props.navigation.openDrawer();
  //   this.props.navigation.closeDrawer();
  // }

  // componentDidCatch(error, info) {
  //   logErrorToMyService(error, info);
  // }

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
