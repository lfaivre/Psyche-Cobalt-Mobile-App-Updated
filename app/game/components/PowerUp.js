import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import Emoji from 'react-native-emoji';

export default class PowerUp extends React.Component {
  render() {
    switch (this.props.powerUp) {
      case 'clearScreen':
        return (
          // TODO: Convert to Button
          <TouchableHighlight
            onPress={() => {
              // console.log('Tapped powerUpClearScreen!');
              this.props.handleActivatePowerUp(this.props.index, 'clearScreen');
            }}
            style={styles.powerUpClearScreen}
          >
            <View>
              <Emoji name="bomb" style={{ fontSize: 20 }} />
            </View>
          </TouchableHighlight>
        );
      case 'clock':
        return (
          // TODO: Convert to Button
          <TouchableHighlight
            onPress={() => {
              // console.log('Tapped powerUpClock!');
              this.props.handleActivatePowerUp(this.props.index, 'clock');
            }}
            style={styles.powerUpClock}
          >
            <View>
              <Emoji name="stopwatch" style={{ fontSize: 20 }} />
            </View>
          </TouchableHighlight>
        );
      case 'health':
        return (
          // TODO: Convert to Button
          <TouchableHighlight
            onPress={() => {
              // console.log('Tapped powerUpHealth!');
              this.props.handleActivatePowerUp(this.props.index, 'health');
            }}
            style={styles.powerUpHealth}
          >
            <View>
              <Emoji name="hammer_and_wrench" style={{ fontSize: 20 }} />
            </View>
          </TouchableHighlight>
        );
      default:
        return (
          // TODO: Convert to Button
          <TouchableHighlight
            onPress={() => {
              // console.log('Tapped Empty!');
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
  powerUpClock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    // backgroundColor: '#F1DEDE',
    // backgroundColor: '#7A9B76'
    backgroundColor: '#EDFF71'
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
