import React from 'react';
import { View, Text } from 'react-native';
import { Fonts } from '../../components/Fonts';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utilities';
import { TUTORIAL_VIEWS } from './repo';

export default class TutorialContainer extends React.Component {
  render() {
    return (
      <View style={styles.basics}>
        <Text style={styles.title}>
          {TUTORIAL_VIEWS[this.props.index].title}
        </Text>
        <View>
          {TUTORIAL_VIEWS[this.props.index].text.map((text) => {
            return <Text style={styles.bodyText}>{text}</Text>;
          })}
        </View>
      </View>
    );
  }
}

const styles = {
  basics: {
    height: SCREEN_HEIGHT * (7 / 8) - SCREEN_WIDTH * (3 / 128),
    width: SCREEN_WIDTH - SCREEN_WIDTH * (2 / 128),
    paddingVertical: SCREEN_WIDTH * (1 / 128),
    paddingHorizontal: SCREEN_WIDTH * (1 / 128),
    marginVertical: SCREEN_WIDTH * (1 / 128),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'coral'
  },
  title: {
    marginVertical: SCREEN_WIDTH * (1 / 64),
    color: '#bca0dc',
    fontSize: SCREEN_HEIGHT * (1 / 16),
    fontFamily: Fonts.RobotoLight,
  },
  bodyText: {
    marginVertical: SCREEN_WIDTH * (1 / 64),
    color: 'white',
  },
};
