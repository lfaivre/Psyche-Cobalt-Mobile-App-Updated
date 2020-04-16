import React from 'react';
import { View, Text, TouchableHighlight, ImageBackground } from 'react-native';

import { Fonts } from '../components/Fonts';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../psychetap/utilities';
import { GAMEVIEW_ENUM } from '../psychetap/types';

export default class StartView extends React.Component {
  state = { imageLoaded: false };

  render() {
    return (
      <View style={styles.outerContainer}>
        {/* <NavigationHeader {...this.props} /> */}
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
              <View style={styles.textWrapper}>
                <Text style={styles.titleText}>PsycheTap</Text>
                <Text style={styles.titleTextTwo}>PsycheTap</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  onPress={() => this.props.handleGameView(GAMEVIEW_ENUM.fact)}
                  style={styles.startButton}
                >
                  <Text style={styles.startButtonText}>play</Text>
                </TouchableHighlight>

                <TouchableHighlight
                  onPress={() => {
                    this.props.handleGameView(GAMEVIEW_ENUM.tutorial);
                  }}
                  style={styles.tutorialButton}
                >
                  <Text style={styles.tutorialButtonText}>view tutorial</Text>
                </TouchableHighlight>
              </View>
            </View>
          )}
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  outerContainer: {
    flex: 1,
    // backgroundColor: '#140025',
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    position: 'relative',
  },
  titleText: {
    marginVertical: SCREEN_HEIGHT * (1 / 32),
    fontSize: SCREEN_HEIGHT * (1 / 4),
    // letterSpacing: 2,
    fontFamily: Fonts.BungeeRegular,
    // fontWeight: 'bold',
    textAlign: 'center',
    // color: 'white',
    color: '#bca0dc',
  },
  titleTextTwo: {
    position: 'absolute',
    top: 4,
    left: 4,
    marginVertical: SCREEN_HEIGHT * (1 / 32),
    fontSize: SCREEN_HEIGHT * (1 / 4),
    // letterSpacing: 2,
    fontFamily: Fonts.BungeeRegular,
    // fontWeight: 'bold',
    textAlign: 'center',
    // color: '#bca0dc',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'purple'
  },
  startButton: {
    height: SCREEN_HEIGHT * (1 / 8),
    width: SCREEN_WIDTH * (3 / 5),
    borderWidth: 1,
    borderColor: '#bca0dc',
    marginVertical: SCREEN_HEIGHT * (1 / 32),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bca0dc',
  },
  startButtonText: {
    color: '#1e2223',
    fontSize: SCREEN_HEIGHT * (1 / 16),
    fontFamily: Fonts.BungeeRegular,
  },
  tutorialButton: {
    height: SCREEN_HEIGHT * (1 / 8),
    width: SCREEN_WIDTH * (2 / 5),
    borderWidth: 1,
    borderColor: '#bca0dc',
    marginVertical: SCREEN_HEIGHT * (1 / 32),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink'
  },
  tutorialButtonText: {
    color: '#bca0dc',
    fontSize: SCREEN_HEIGHT * (1 / 16),
    fontFamily: Fonts.BungeeRegular,
  },
};
