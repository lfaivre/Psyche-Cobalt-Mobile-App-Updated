import React from 'react';
import { StatusBar, View, Alert } from 'react-native';
import { Button, Text } from 'native-base';
import { ScreenOrientation } from 'expo';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';

import StartView from '../game/components/StartView';
import { Fonts } from '../components/Fonts';
import { PsycheRover } from '../game/renderers';
import { CreateBox, Physics, Collision } from '../game/systems';

import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  PSYCHEROVER_WIDTH,
  PSYCHEROVER_HEIGHT,
  INITIAL_PSYCHEROVER
} from '../game/utilities';

import { ENGINE, WORLD } from '../game/init';

export default class GameOne extends React.Component {
  state = { ready: false, running: true, count: 0 };

  handlePress = setReady => {
    this.setState({ ready: setReady });
  };

  onEvent = e => {
    if (e.type === 'game-over') {
      this.setState({ running: false });
      Alert.alert('Game Over');
    } else if (e.type === 'update') {
    }
  };

  reset = () => {
    this.engine.swap({
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
    });
    Matter.World.clear(WORLD);
    Matter.Engine.clear(ENGINE);
    Matter.World.add(WORLD, [INITIAL_PSYCHEROVER]);
    this.setState({ running: true });
  };

  componentDidMount() {
    Matter.Events.on(ENGINE, 'collisionStart', function(event) {
      console.log('COLLISION!');
    });
    this.engine = null;
  }

  componentDidUpdate(prevProp, prevState) {
    console.log('GAME: DID UPDATE');
    if (prevState.ready !== this.state.ready) {
      if (this.state.ready === true) {
        console.log('GAME: RESET');
        this.reset();
      } else if (this.state.ready === false) {
        console.log('GAME: SET RUNNING TO FALSE');
        this.setState({ running: false });
      }
    } else {
      console.log('GAME: NO CHANGES NECESSARY');
    }
  }

  render() {
    return this.state.ready ? (
      <GameEngine
        ref={ref => {
          this.engine = ref;
        }}
        style={styles.container}
        systems={[Physics, CreateBox, Collision]}
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
        running={this.state.running}
        onEvent={this.onEvent}
      >
        <Button onPress={() => this.handlePress(false)} style={styles.button}>
          <Text style={styles.buttonText}>Exit</Text>
        </Button>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Note: Tap on screen for boxes.</Text>
          <Text style={styles.text}>Count: {this.state.count}</Text>
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
