import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import TutorialNavigation from '../tutorial/TutorialNavigation';
import TutorialContainer from '../tutorial/TutorialContainer';
import styles from '../styles/TutorialView.style';

const backgroundImagePath = require('../../assets/images/backgrounds/surfacebg.jpg');

export default class TutorialView extends React.Component {
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
              <TutorialContainer />
              <TutorialNavigation handleGameView={this.props.handleGameView} />
            </View>
          )}
        </ImageBackground>
      </View>
    );
  }
}
