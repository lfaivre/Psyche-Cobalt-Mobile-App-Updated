import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { Fonts } from '../components/Fonts';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../game/utilities';
import TutorialNavigation from './tutorial/TutorialNavigation';
import TutorialContainer from './tutorial/TutorialContainer';
import { TUTORIAL_VIEWS_LENGTH } from './tutorial/repo';

export default class TutorialView extends React.Component {
  state = { index: 0, imageLoaded: false };

  componentDidMount() {
    this.length = TUTORIAL_VIEWS_LENGTH;
    this.lengthZero = this.length - 1;
  }

  handleTutorialNavigation = (index) => {
    if (index >= 0 && index <= this.lengthZero) {
      this.setState({ index: index });
    } else if (index < 0) {
      this.setState({ index: 0 });
    } else if (index > this.lengthZero) {
      this.setState({ index: this.lengthZero });
    } else {
      // console.log('ERROR: TUTORIAL INDEX OUT OF BOUNDS');
    }
  };

  render() {
    return (
      <View style={styles.tutorialView}>
        <ImageBackground
          source={require('../assets/images/backgrounds/surfacebg.jpg')}
          style={styles.image}
          onLoadEnd={() => this.setState({ imageLoaded: true })}
        >
          {!this.state.imageLoaded && (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
          )}

          {this.state.imageLoaded && (
            <View style={styles.container}>
              <TutorialContainer index={this.state.index} />
              <TutorialNavigation
                index={this.state.index}
                lengthZero={this.lengthZero}
                handleTutorialNavigation={this.handleTutorialNavigation}
                handleGameView={this.props.handleGameView}
              />
            </View>
          )}
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  tutorialView: {
    flex: 1,
    // backgroundColor: '#1e2223',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1e2223',
  },
  loadingText: {
    fontSize: SCREEN_HEIGHT * (1 / 16),
    // letterSpacing: 2,
    fontFamily: Fonts.BungeeRegular,
    textAlign: 'center',
    color: '#bca0dc',
  },
  container: {
    flex: 1,
    backgroundColor: '#1e2223',
  },
};
