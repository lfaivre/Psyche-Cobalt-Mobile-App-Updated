import React from 'react';
import { NavigationActions } from 'react-navigation';
import { ScreenOrientation } from 'expo';
import { ScrollView, Text, View, ImageBackground } from 'react-native';
import { Accordion, Body, Header, Left, Icon, Content } from 'native-base';
import { withNavigationFocus } from 'react-navigation';

import PropTypes from 'prop-types';
import styles from '../styles/SideMenu.style';

/* Title for accordion */
const missionArray = [
  { title: <Text style={styles.accordionHeaderText}>Mission</Text> },
];

const gameArray = [
  { title: <Text style={styles.accordionHeaderText}>Games</Text> },
];

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    // state variables
    this.state = {};
  }

  /* Handle navigating to a new screen
   *  @param route, the screen to navigate to
   */
  navigateToScreen = (route) => async () => {
    if (route !== 'PsycheTap') {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
      console.log('PORTRAIT_UP');
    } else {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
      console.log('LANDSCAPE_LEFT');
    }
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  /* Render the Mission accordion on the drawer menu */
  renderMissionContent = () => {
    return (
      <ImageBackground
        source={require('../assets/images/backgrounds/AssetsPsyche_BackgroundBreakup_LightPurpletoDark-01.png')}
        style={{
          width: '100%',
        }}
      >
        <View style={styles.collapseView}>
          <Text
            style={styles.navItemStyle}
            onPress={this.navigateToScreen('Overview')}
          >
            Overview
          </Text>
          <Text
            style={styles.navItemStyle}
            onPress={this.navigateToScreen('The Asteroid')}
          >
            The Asteroid
          </Text>
          <Text
            style={styles.navItemStyle}
            onPress={this.navigateToScreen('The Spacecraft')}
          >
            The Spacecraft
          </Text>
          <Text
            style={styles.navItemStyle}
            onPress={this.navigateToScreen('Instruments and Science')}
          >
            Instruments and Science
          </Text>
          <Text
            style={styles.navItemStyle}
            onPress={this.navigateToScreen('The Team')}
          >
            The Team
          </Text>
        </View>
      </ImageBackground>
    );
  };

  renderGameContent = () => {
    return (
      <ImageBackground
        source={require('../assets/images/backgrounds/AssetsPsyche_BackgroundBreakup_LightPurpletoDark-01.png')}
        style={{
          width: '100%',
        }}
      >
        <View style={styles.collapseView}>
          <Text
            style={styles.navItemStyle}
            onPress={this.navigateToScreen('PsycheTap')}
          >
            PsycheTap
          </Text>
          <Text
            style={styles.navItemStyle}
            onPress={this.navigateToScreen('Game Two')}
          >
            Game Two
          </Text>
        </View>
      </ImageBackground>
    );
  };

  /* Update menu styling to show which page is currently selected */
  checkFocus(routeName, routeIndex) {
    if (this.props.navigation.state.index === routeIndex) {
      return <Text style={styles.highlightedPage}>{routeName}</Text>;
    } else {
      return <Text>{routeName}</Text>;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header style={styles.sectionHeadingStyle}>
            <Left>
              <Icon
                style={styles.navIconStyle}
                name="arrow-back"
                onPress={() => this.props.navigation.closeDrawer()}
              />
            </Left>
            <Body></Body>
          </Header>
          <Content>
            <Text style={styles.view} onPress={this.navigateToScreen('Home')}>
              {this.checkFocus('Home', 0)}
            </Text>

            <Accordion
              headerStyle={styles.accordionHeaderStyle}
              style={styles.navSectionStyle}
              dataArray={missionArray}
              expanded={1}
              icon="md-arrow-dropdown"
              expandedIcon="md-arrow-dropup"
              iconStyle={styles.icon}
              expandedIconStyle={styles.icon}
              renderContent={this.renderMissionContent}
            />

            <Text
              style={styles.view}
              onPress={this.navigateToScreen('Timeline')}
            >
              {this.checkFocus('Timeline', 1)}
            </Text>

            <Text
              style={styles.view}
              onPress={this.navigateToScreen('Social Media')}
            >
              {this.checkFocus('Social Media', 2)}
            </Text>

            <Accordion
              headerStyle={styles.accordionHeaderStyle}
              style={styles.navSectionStyle}
              dataArray={gameArray}
              expanded={1}
              icon="md-arrow-dropdown"
              expandedIcon="md-arrow-dropup"
              iconStyle={styles.icon}
              expandedIconStyle={styles.icon}
              renderContent={this.renderGameContent}
            />
          </Content>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object,
};

export default withNavigationFocus(SideMenu);
