import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import { Fonts } from '../../components/Fonts';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utilities';

export default class TutorialNavigation extends React.Component {
  render() {
    return (
      <View style={styles.tutorialNavigation}>
        <TouchableHighlight
          onPress={() =>
            this.props.handleTutorialNavigation(this.props.index - 1)
          }
          disabled={this.props.index === 0}
          underlayColor="#1e2223"
          style={styles.navButton}
        >
          <Text
            style={[
              styles.navText,
              this.props.index === 0 ? { color: 'rgba(188,160,220,0.25)' } : {}
            ]}
          >
            previous
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.props.handleGameView('start')}
          underlayColor="#1e2223"
          style={styles.navButton}
        >
          <Text style={styles.navText}>exit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            this.props.handleTutorialNavigation(this.props.index + 1)
          }
          disabled={this.props.index === this.props.lengthZero}
          underlayColor="#1e2223"
          style={styles.navButton}
        >
          <Text
            style={[
              styles.navText,
              this.props.index === this.props.lengthZero
                ? { color: 'rgba(188,160,220,0.25)' }
                : {}
            ]}
          >
            next
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  tutorialNavigation: {
    height: SCREEN_HEIGHT * (1 / 8),
    width: SCREEN_WIDTH - SCREEN_WIDTH * (2 / 128),
    // paddingVertical: SCREEN_WIDTH * (1 / 128),
    paddingHorizontal: SCREEN_WIDTH * (1 / 128),
    marginVertical: SCREEN_WIDTH * (1 / 128),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    position: 'absolute',
    top: SCREEN_HEIGHT - SCREEN_HEIGHT * (1 / 8) - SCREEN_WIDTH * (2 / 128),
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
    // backgroundColor: 'green'
  },
  navButton: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 0,
    justifyContent: 'space-around',
    alignItems: 'center'
    // backgroundColor: 'pink'
  },
  navText: {
    color: '#bca0dc',
    fontSize: SCREEN_HEIGHT * (1 / 16),
    fontFamily: Fonts.RobotoLight
  }
};
