import React from 'react';
import { View } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utilities';

export default class BottomBar extends React.Component {
  render() {
    return (
      <View style={styles.bottomBarContainer}>
        <View style={styles.powerUpContainer}>
          <View style={styles.powerUpCircle}></View>
          <View style={styles.powerUpCircle}></View>
          <View style={styles.powerUpCircle}></View>
        </View>
        <View style={styles.healthContainer}>
          <View
            style={[
              styles.healthBar,
              { width: SCREEN_WIDTH * (1 / 2) * (this.props.health / 100) }
            ]}
          ></View>
        </View>
      </View>
    );
  }
}

const styles = {
  bottomBarContainer: {
    height: SCREEN_HEIGHT * (1 / 8),
    width: SCREEN_WIDTH - SCREEN_WIDTH * (2 / 128),
    marginVertical: SCREEN_WIDTH * (1 / 128),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    position: 'absolute',
    top: SCREEN_HEIGHT - SCREEN_HEIGHT * (1 / 8) - SCREEN_WIDTH * (2 / 128),
    // top: (111 * SCREEN_HEIGHT) / 128,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
    // backgroundColor: 'blue'
  },
  powerUpContainer: {
    flexDirection: 'row'
    // backgroundColor: 'purple'
  },
  powerUpCircle: {
    height: SCREEN_HEIGHT * (1 / 8),
    width: SCREEN_HEIGHT * (1 / 8),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    borderRadius: SCREEN_HEIGHT * (1 / 16),
    borderWidth: 1,
    borderColor: 'white'
    // backgroundColor: 'red'
  },
  healthContainer: {
    width: SCREEN_WIDTH * (1 / 2),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
    // backgroundColor: 'red'
  },
  healthBar: {
    height: SCREEN_HEIGHT * (1 / 32),
    // width: SCREEN_WIDTH * (1 / 2),
    borderRadius: SCREEN_HEIGHT * (1 / 64),
    backgroundColor: 'rgba(164,251,166, 1)'
  }
};
