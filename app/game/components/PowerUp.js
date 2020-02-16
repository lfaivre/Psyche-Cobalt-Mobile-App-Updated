import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Fonts } from '../../components/Fonts';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utilities';

export default class PowerUp extends React.Component {
  render() {
    switch (this.props.powerUp) {
      case 'clearScreen':
        return (
          // TODO: Convert to Button
          <TouchableHighlight
            onPress={() => {
              console.log('Tapped powerUpClearScreen!');
              this.props.emitEngineEvent(
                'activateClearScreen',
                this.props.index
              );
            }}
            style={styles.powerUpClearScreen}
          >
            <View></View>
          </TouchableHighlight>
        );
      case 'health':
        return (
          // TODO: Convert to Button
          <TouchableHighlight
            onPress={() => {
              console.log('Tapped powerUpHealth!');
              this.props.emitEngineEvent('activateHealth', this.props.index);
            }}
            style={styles.powerUpHealth}
          >
            <View></View>
          </TouchableHighlight>
        );
      default:
        return (
          // TODO: Convert to Button
          <TouchableHighlight
            onPress={() => {
              console.log('Tapped Empty!');
            }}
            style={styles.powerUpEmpty}
          >
            <View></View>
          </TouchableHighlight>
        );
    }
  }
}

const styles = {
  powerUpClearScreen: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#DB7F8E'
    // backgroundColor: '#7A9B76'
  },
  powerUpHealth: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    // backgroundColor: '#F1DEDE',
    // backgroundColor: '#7A9B76'
    backgroundColor: '#A4FBA6'
  },
  powerUpEmpty: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    // backgroundColor: '#F1DEDE',
    // backgroundColor: '#7A9B76'
    backgroundColor: 'transparent'
  }
};
