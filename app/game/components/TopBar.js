import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Fonts } from '../../components/Fonts';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utilities';

export default class TopBar extends React.Component {
  padScoreStatus = (health, padSize) => {
    return ('000000000' + health).substr(-padSize);
  };

  render() {
    return (
      <View style={styles.topBarContainer}>
        <TouchableHighlight
          onPress={() => {
            this.props.setNavigationModalVisible(true);
          }}
          style={styles.menuButtonContainer}
        >
          <Text style={styles.menuButtonText}>m</Text>
        </TouchableHighlight>
        <View style={styles.infoContainer}>
          <Text style={styles.scoreText}>
            SCORE {this.padScoreStatus(this.props.score, 10)}
          </Text>
          <Text style={styles.scoreText}>LEVEL {this.props.level}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  topBarContainer: {
    height: SCREEN_HEIGHT * (1 / 8),
    width: SCREEN_WIDTH - SCREEN_WIDTH * (2 / 128),
    marginVertical: SCREEN_WIDTH * (1 / 128),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue'
  },
  menuButtonContainer: {
    height: SCREEN_HEIGHT * (1 / 8),
    width: SCREEN_HEIGHT * (1 / 8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    borderRadius: SCREEN_HEIGHT * (1 / 16),
    borderWidth: 1,
    borderColor: 'white',
    // backgroundColor: 'white',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink'
  },
  menuButtonText: {
    // color: '#bca0dc',
    color: 'white',
    fontSize: SCREEN_HEIGHT * (1 / 16),
    fontFamily: Fonts.BungeeRegular,
  },
  scoreText: {
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    color: '#bca0dc',
    fontSize: SCREEN_HEIGHT * (1 / 24),
    fontFamily: Fonts.BungeeRegular,
  },
};
