import React from 'react';
import { StatusBar, Alert, ImageBackground } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';

// Components
import { Fonts } from '../components/Fonts';
import BottomBar from './components/BottomBar';
import TopBar from './components/TopBar';

// Game Engine
import { ENGINE, WORLD } from './engine/init';
import { PsycheRover } from './engine/renderers/PsycheRover';
import { CreateBox, Physics } from './engine/systems';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  PSYCHEROVER_WIDTH,
  PSYCHEROVER_HEIGHT,
  INITIAL_PSYCHEROVER
} from './utilities';

export default class GameView extends React.Component {
  state = { running: true, imageLoaded: false, health: 100 };
  _isMounted = false;

  componentDidMount() {
    // this.engine = null;
    console.log('GAME: MOUNTED');
    this._isMounted = true;
    this.reset();
    Matter.Events.on(ENGINE, 'collisionStart', e => {
      if (this._isMounted && this.state.health !== undefined) {
        let newHealth = this.state.health - 10;
        if (newHealth >= 0) {
          this.setState({ health: newHealth });
        } else {
          this.setState({ health: 0 });
        }
      }
    });
  }

  componentWillUnmount() {
    // TODO: This is an anti-pattern, need to handle clearing Matter instances correctly
    this._isMounted = false;
    Matter.World.clear(WORLD);
    Matter.Engine.clear(ENGINE);
  }

  // GameEngine Handlers
  onEvent = e => {
    if (e.type === 'game-over') {
      if (this._isMounted) {
        this.setState({ running: false });
      }
      Alert.alert('Game Over');
    } else if (e.type === 'update') {
    }
  };

  reset = () => {
    console.log('GAME: RESET');
    this.engine.swap({
      physics: {
        engine: ENGINE,
        world: WORLD
      },
      psycheRover: {
        body: INITIAL_PSYCHEROVER,
        size: [PSYCHEROVER_WIDTH, PSYCHEROVER_HEIGHT],
        color: '#bca0dc',
        renderer: PsycheRover
      }
    });
    Matter.World.clear(WORLD);
    Matter.Engine.clear(ENGINE);
    Matter.World.add(WORLD, [INITIAL_PSYCHEROVER]);
    if (this._isMounted) {
      this.setState({ running: true, health: 100 });
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/backgrounds/space-bg.jpg')}
        style={{
          resizeMode: 'contain',
          flex: 1
        }}
        onLoadEnd={() => {
          console.log('Image loaded!');
        }}
      >
        <GameEngine
          ref={ref => {
            this.engine = ref;
          }}
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
              color: '#bca0dc',
              renderer: PsycheRover
            }
          }}
          running={this.state.running}
          onEvent={this.onEvent}
        >
          <StatusBar hidden={true} />
          <TopBar handlePress={this.props.handlePress} />
          <BottomBar health={this.state.health} />
        </GameEngine>
      </ImageBackground>
    );
  }
}

const styles = {
  container: {
    flex: 1
    // backgroundColor: '#FFF'
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
