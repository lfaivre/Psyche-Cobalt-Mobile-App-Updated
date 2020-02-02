import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import NavigationHeader from '../components/NavigationHeader.js';
import { Fonts } from '../components/Fonts';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../game/utilities';

export default class StartView extends React.Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        {/* <NavigationHeader {...this.props} /> */}
        <View style={styles.container}>
          <Text style={styles.titleText}>untitled game</Text>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={() => this.props.handleGameView('game')}
              style={styles.startButton}
            >
              <Text style={styles.startButtonText}>start</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                this.props.handleGameView('tutorial');
              }}
              style={styles.tutorialButton}
            >
              <Text style={styles.tutorialButtonText}>view tutorial</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  outerContainer: {
    flex: 1,
    // backgroundColor: '#140025',
    backgroundColor: '#1e2223'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  titleText: {
    marginVertical: SCREEN_HEIGHT * (1 / 32),
    fontSize: SCREEN_HEIGHT * (1 / 8),
    // letterSpacing: 2,
    fontFamily: Fonts.RobotoLight,
    textAlign: 'center',
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
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
    backgroundColor: '#bca0dc'
  },
  startButtonText: {
    color: '#1e2223',
    fontSize: SCREEN_HEIGHT * (1 / 16),
    fontFamily: Fonts.RobotoLight
  },
  tutorialButton: {
    height: SCREEN_HEIGHT * (1 / 8),
    width: SCREEN_WIDTH * (2 / 5),
    borderWidth: 1,
    borderColor: '#bca0dc',
    marginVertical: SCREEN_HEIGHT * (1 / 32),
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: 'pink'
  },
  tutorialButtonText: {
    color: '#bca0dc',
    fontSize: SCREEN_HEIGHT * (1 / 16),
    fontFamily: Fonts.RobotoLight
  }
};
