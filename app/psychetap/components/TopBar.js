import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../styles/TopBar.style';

export default class TopBar extends React.Component {
  padScoreStatus = (health, padSize) => {
    return health >= 1000000000
      ? 'Max'
      : ('000000000' + health).substr(-padSize);
  };

  render() {
    return (
      <View style={styles.topBarContainer}>
        <TouchableHighlight
          onPress={() => {
            this.props.setNavigationModalVisible(true);
          }}
          style={styles.menuButton}
        >
          <Text style={styles.menuButtonText}>m</Text>
        </TouchableHighlight>
        <View style={styles.infoContainer}>
          <Text style={styles.scoreText}>
            SCORE {this.padScoreStatus(this.props.score, 9)}
          </Text>
          <Text style={styles.scoreText}>LEVEL {this.props.level}</Text>
        </View>
      </View>
    );
  }
}
