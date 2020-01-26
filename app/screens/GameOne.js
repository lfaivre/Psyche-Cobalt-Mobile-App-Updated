import React from 'react';
import { StatusBar } from 'react-native';
import { Button, Text } from 'native-base';
import { ScreenOrientation } from 'expo';
import { GameEngine } from 'react-native-game-engine';

import StartView from '../game/components/StartView';
import { Fonts } from '../components/Fonts';
import { PsycheRover } from '../game/renderers';
import { CreateBox, Physics } from '../game/systems';
import { ENGINE, WORLD } from '../game/init';

export default class GameOne extends React.Component {
  state = { ready: false };

  handlePress = setReady => {
    this.setState({ ready: setReady });
  };

  render() {
    return this.state.ready ? (
      <GameEngine
        style={styles.container}
        systems={[Physics, CreateBox]}
        entities={{
          physics: {
            engine: ENGINE,
            world: WORLD
          }
        }}
      >
        <Button onPress={() => this.handlePress(false)} style={styles.button}>
          <Text style={styles.buttonText}>Exit</Text>
        </Button>
        <StatusBar hidden={true} />
      </GameEngine>
    ) : (
      <StartView {...this.props} handlePress={this.handlePress} />
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  buttonText: {
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: Fonts.RobotoLight,
    textAlign: 'center',
    color: '#140025'
  },
  button: {
    height: 50,
    width: 100,
    position: 'absolute',
    left: 0,
    top: 0,
    border: 'none',
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  }
};
