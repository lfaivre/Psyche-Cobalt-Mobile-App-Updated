import React from 'react';
import { View, Button, Text, TouchableHighlight } from 'react-native';
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
            this.props.setModalVisible(true);
          }}
          style={styles.menuButtonContainer}
        >
          <Text style={styles.menuButtonText}>M</Text>
        </TouchableHighlight>
        <Text style={styles.scoreText}>
          SCORE {this.padScoreStatus(this.props.score, 10)}
        </Text>
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
    alignItems: 'center'
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
    borderColor: 'white'
  },
  menuButtonText: {
    color: '#bca0dc',
    fontSize: SCREEN_HEIGHT * (1 / 16),
    fontFamily: Fonts.RobotoLight
  },
  scoreText: {
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    color: '#bca0dc',
    fontSize: SCREEN_HEIGHT * (1 / 24),
    fontFamily: Fonts.RobotoLight
  }
};
