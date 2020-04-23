import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { PSYCHE_FACTS } from '../repo/facts.js';
import { randomBetween } from '../utilities';
import { GAMEVIEW_ENUM } from '../types';
import styles from '../styles/FactView.style';

export default class FactView extends React.Component {
  get fact() {
    return PSYCHE_FACTS[randomBetween(0, PSYCHE_FACTS.length - 1)];
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Did You Know?</Text>
          <Text style={styles.factText}>{this.fact}</Text>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={() => this.props.handleGameView(GAMEVIEW_ENUM.game)}
              style={styles.startButton}
            >
              <Text style={styles.startButtonText}>start game</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                this.props.handleGameView(GAMEVIEW_ENUM.start);
              }}
              style={styles.tutorialButton}
            >
              <Text style={styles.tutorialButtonText}>exit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
