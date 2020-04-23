import React from 'react';
import { View, Text, TouchableHighlight, ImageBackground } from 'react-native';
import { GAMEVIEW_ENUM } from '../types';
import styles from '../styles/StartView.style';

const backgroundImagePath = require('../../assets/images/backgrounds/surfacebg.jpg');

export default class StartView extends React.Component {
  constructor(props) {
    super(props);
    this.backgroundImagePath = backgroundImagePath;
  }

  state = { imageLoaded: false };

  render() {
    return (
      <View style={styles.outerContainer}>
        <ImageBackground
          source={this.backgroundImagePath}
          style={styles.image}
          onLoadEnd={() => this.setState({ imageLoaded: true })}
        >
          {!this.state.imageLoaded && (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
          )}
          {this.state.imageLoaded && (
            <View style={styles.innerContainer}>
              <View style={styles.textWrapper}>
                <Text style={styles.titleTextOne}>PsycheTap</Text>
                <Text style={styles.titleTextTwo}>PsycheTap</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  onPress={() => this.props.handleGameView(GAMEVIEW_ENUM.fact)}
                  style={styles.startButton}
                >
                  <Text style={styles.startButtonText}>Play</Text>
                </TouchableHighlight>

                <TouchableHighlight
                  onPress={() => {
                    this.props.handleGameView(GAMEVIEW_ENUM.tutorial);
                  }}
                  style={styles.tutorialButton}
                >
                  <Text style={styles.tutorialButtonText}>View Tutorial</Text>
                </TouchableHighlight>
              </View>
            </View>
          )}
        </ImageBackground>
      </View>
    );
  }
}
