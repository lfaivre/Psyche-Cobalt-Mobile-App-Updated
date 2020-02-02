import React from 'react';
import { View, Text } from 'react-native';

import { Fonts } from '../../components/Fonts';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utilities';

export default class Introduction extends React.Component {
  render() {
    return (
      <View style={styles.introduction}>
        <Text style={styles.title}>Introduction</Text>
        <View>
          <Text style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a orci
            vehicula, rutrum ante vel, porttitor leo. Vestibulum vulputate
            lectus erat, aliquam bibendum sem hendrerit.
          </Text>
          <Text style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a orci
            vehicula, rutrum ante vel, porttitor leo. Vestibulum vulputate
            lectus erat, aliquam bibendum sem hendrerit.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  introduction: {
    height: SCREEN_HEIGHT * (7 / 8) - SCREEN_WIDTH * (3 / 128),
    width: SCREEN_WIDTH - SCREEN_WIDTH * (2 / 128),
    paddingVertical: SCREEN_WIDTH * (1 / 128),
    paddingHorizontal: SCREEN_WIDTH * (1 / 128),
    marginVertical: SCREEN_WIDTH * (1 / 128),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
    // backgroundColor: 'coral'
  },
  title: {
    marginVertical: SCREEN_WIDTH * (1 / 64),
    color: '#bca0dc',
    fontSize: SCREEN_HEIGHT * (1 / 16),
    fontFamily: Fonts.RobotoLight
  },
  bodyText: {
    marginVertical: SCREEN_WIDTH * (1 / 64),
    color: 'white'
  }
};
