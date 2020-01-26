import React from 'react';
import { StatusBar, View } from 'react-native';
import { Button, Text } from 'native-base';
import { ScreenOrientation } from 'expo';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';

import StartView from '../game/components/StartView';
import { Fonts } from '../components/Fonts';
import { PsycheRover } from '../game/renderers';
import { CreateBox, Physics } from '../game/systems';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  PSYCHEROVER_WIDTH,
  PSYCHEROVER_HEIGHT,
  INITIAL_PSYCHEROVER
} from '../game/utilities';
import { ENGINE, WORLD } from '../game/init';

export default class GameOne extends React.Component {
  state = { ready: false };

  handlePress = setReady => {
    this.setState({ ready: setReady });
  };

  componentDidMount() {
    console.log('MOUNTED GAME');
    Matter.World.add(WORLD, [INITIAL_PSYCHEROVER]);
  }

  render() {
    return this.state.ready ? (
      <GameEngine
        style={styles.container}
        systems={[Physics, CreateBox]}
        entities={{
          physics: {
            engine: ENGINE,
            world: WORLD
          },
          psycheRover: {
            body: INITIAL_PSYCHEROVER,
            size: [PSYCHEROVER_WIDTH, PSYCHEROVER_HEIGHT],
            color: 'black',
            renderer: PsycheRover
          }
        }}
      >
        <Button onPress={() => this.handlePress(false)} style={styles.button}>
          <Text style={styles.buttonText}>Exit</Text>
        </Button>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Note: Tap on screen for boxes</Text>
        </View>

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
  textContainer: {
    height: 50,
    width: 400,
    position: 'absolute',
    left: SCREEN_WIDTH / 2 - 200,
    top: SCREEN_HEIGHT / 2 - 25,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: Fonts.RobotoLight,
    color: 'rgba(20, 0, 37, 0.2)'
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
    width: 100,
    position: 'absolute',
    left: 0,
    top: 0,
    border: 'none',
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#140025'
  }
};
