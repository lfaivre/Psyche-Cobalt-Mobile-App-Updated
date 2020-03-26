import React from 'react';
import { View } from 'react-native';

import TutorialNavigation from './tutorial/TutorialNavigation';
import TutorialContainer from './tutorial/TutorialContainer';

export default class TutorialView extends React.Component {
  state = { index: 0 };

  componentDidMount() {
    this.length = 2;
    this.lengthZero = this.length - 1;
  }

  handleTutorialNavigation = index => {
    if (index >= 0 && index <= this.lengthZero) {
      this.setState({ index: index });
    } else if (index < 0) {
      this.setState({ index: 0 });
    } else if (index > this.lengthZero) {
      this.setState({ index: this.lengthZero });
    } else {
      // console.log('ERROR: TUTORIAL INDEX OUT OF BOUNDS');
    }
  };

  render() {
    return (
      <View style={styles.tutorialView}>
        <TutorialContainer index={this.state.index} />
        <TutorialNavigation
          index={this.state.index}
          lengthZero={this.lengthZero}
          handleTutorialNavigation={this.handleTutorialNavigation}
          handleGameView={this.props.handleGameView}
        />
      </View>
    );
  }
}

const styles = {
  tutorialView: {
    flex: 1,
    backgroundColor: '#1e2223'
  }
};
