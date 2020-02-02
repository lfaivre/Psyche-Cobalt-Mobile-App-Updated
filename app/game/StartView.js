import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import NavigationHeader from '../components/NavigationHeader.js';
import { Fonts } from '../components/Fonts';

export default class StartView extends React.Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <NavigationHeader {...this.props} />
        <View style={styles.container}>
          <Text style={styles.text}>UNTITLED GAME</Text>
          <Button
            onPress={() => this.props.handleGameView(true)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Start</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  outerContainer: {
    flex: 1,
    backgroundColor: '#140025'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    letterSpacing: 2,
    fontFamily: Fonts.RobotoLight,
    textAlign: 'center',
    color: 'white'
  },
  buttonText: {
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: Fonts.RobotoLight,
    textAlign: 'center',
    color: 'white'
  },
  button: {
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
};
