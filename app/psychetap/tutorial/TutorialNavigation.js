import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { GAMEVIEW_ENUM } from '../types';
import styles from '../styles/TutorialNavigation.style';

export default class TutorialNavigation extends React.Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <TouchableHighlight
          onPress={() => this.props.handleGameView(GAMEVIEW_ENUM.start)}
          underlayColor="transparent"
          style={styles.exitButton}
        >
          <Text style={styles.text}>Exit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
