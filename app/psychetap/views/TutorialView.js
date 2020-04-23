import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import TutorialNavigation from '../tutorial/TutorialNavigation';
import TutorialContainer from '../tutorial/TutorialContainer';
import { TUTORIAL_VIEWS_LENGTH_ZERO } from '../tutorial/repo';
import styles from '../styles/TutorialView.style';

const backgroundImagePath = require('../../assets/images/backgrounds/surfacebg.jpg');

export default class TutorialView extends React.Component {
  constructor(props) {
    super(props);
    this.backgroundImagePath = backgroundImagePath;
  }

  state = { index: 0, imageLoaded: false };

  componentDidMount() {
    this.lengthZero = TUTORIAL_VIEWS_LENGTH_ZERO;
  }

  handleTutorialNavigation = (index) => {
    if (index <= 0) {
      this.setState({ index: 0 });
    } else if (index >= this.lengthZero) {
      this.setState({ index: this.lengthZero });
    }
    this.setState({ index });
  };

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
              <TutorialContainer index={this.state.index} />
              <TutorialNavigation
                index={this.state.index}
                lengthZero={this.lengthZero}
                handleTutorialNavigation={this.handleTutorialNavigation}
                handleGameView={this.props.handleGameView}
              />
            </View>
          )}
        </ImageBackground>
      </View>
    );
  }
}
