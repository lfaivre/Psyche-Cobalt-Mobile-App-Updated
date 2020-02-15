import React from 'react';
import { StatusBar, Alert, ImageBackground } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';

// Components
import LoadingModal from './components/LoadingModal';
import NavigationModal from './components/NavigationModal';
import GameOverModal from './components/GameOverModal';
import BottomBar from './components/BottomBar';
import TopBar from './components/TopBar';

// Game Engine
import { ENGINE, WORLD } from './engine/init';
import {
  PsycheRover,
  PsycheRover_Matter
} from './engine/renderers/PsycheRover';
import {
  Physics,
  DeployAsteroids,
  DestroyAsteroids,
  RemoveAsteroids,
  MoveAsteroids,
  RemoveCollidedAsteroids
} from './engine/systems';

export default class GameView extends React.Component {
  constructor(props) {
    super(props);
    this._engineRef = null;
  }
  state = {
    running: true,
    imageLoaded: false,
    health: 100,
    score: 0,
    navigationModalVisible: false,
    gameOverModalVisible: false,
    systems: [
      Physics,
      DeployAsteroids,
      DestroyAsteroids,
      RemoveAsteroids,
      MoveAsteroids,
      RemoveCollidedAsteroids
    ]
  };
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.reset();
    Matter.Events.on(ENGINE, 'collisionStart', e => {
      if (!e.pairs[0].bodyA.isStatic) {
        this._engineRef.dispatch({
          type: 'asteroidCollision',
          id: e.pairs[0].bodyA.id
        });
      } else if (!e.pairs[0].bodyB.isStatic) {
        this._engineRef.dispatch({
          type: 'asteroidCollision',
          id: e.pairs[0].bodyB.id
        });
      }
      if (this._isMounted && this.state.health !== undefined) {
        let newHealth = this.state.health - 10;
        if (this.state.health !== 0) {
          if (newHealth >= 0) {
            this.setState({ health: newHealth });
          } else {
            this.setState({ health: 0 });
          }
        }
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.health !== prevState.health) {
      if (this.state.health === 0) {
        // TEMPORARY WORKAROUND, STOP/RUNNING DOESN'T WORK
        this.setState({ running: false, systems: [] }, () => {
          this.stopEngine();
          this.setGameOverModalVisible(true);
        });
      }
    }
  }

  setEngineRef = classRef => {
    this._engineRef = classRef;
  };

  stopEngine = () => {
    if (this._engineRef) this._engineRef.stop();
  };

  componentWillUnmount() {
    // TODO: This is an anti-pattern, need to handle clearing Matter instances correctly
    this._isMounted = false;
    Matter.World.clear(WORLD);
    Matter.Engine.clear(ENGINE);
  }

  // View Handlers
  setNavigationModalVisible = visible => {
    this.setState({ navigationModalVisible: visible });
  };

  setGameOverModalVisible = visible => {
    this.setState({ gameOverModalVisible: visible });
  };

  // GameEngine Handlers
  onEvent = e => {
    console.log('EVENT: ', e);
    if (e.type === 'game-over') {
      if (this._isMounted) {
        this.setState({ running: false });
      }
    } else if (e.type === 'destroyAsteroid') {
      const newScore = this.state.score + 10;
      this.setState({ score: newScore });
    }
  };

  reset = () => {
    Matter.World.clear(WORLD);
    Matter.Engine.clear(ENGINE);
    this._engineRef.swap({
      physics: {
        engine: ENGINE,
        world: WORLD
      },
      created: {
        createdAsteroids: []
      },
      destroy: {
        destroyAsteroids: []
      },
      psycheRover: {
        body: PsycheRover_Matter,
        renderer: PsycheRover
      }
    });
    if (this._isMounted) {
      this.setState({ running: true, health: 100, score: 0 });
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
          this.setState({ imageLoaded: true });
        }}
      >
        <LoadingModal imageLoaded={this.state.imageLoaded} />
        <GameEngine
          ref={this.setEngineRef}
          running={this.state.running}
          style={styles.container}
          systems={this.state.systems}
          entities={{
            physics: {
              engine: ENGINE,
              world: WORLD
            },
            created: {
              createdAsteroids: []
            },
            destroy: {
              destroyAsteroids: []
            },
            psycheRover: {
              body: PsycheRover_Matter,
              renderer: PsycheRover
            }
          }}
          onEvent={this.onEvent}
        >
          <StatusBar hidden={true} />
          <NavigationModal
            modalVisible={this.state.navigationModalVisible}
            setModalVisible={this.setNavigationModalVisible}
            handleGameView={this.props.handleGameView}
          />
          <GameOverModal
            modalVisible={this.state.gameOverModalVisible}
            setModalVisible={this.setGameOverModalVisible}
            handleGameView={this.props.handleGameView}
          />
          <TopBar
            setNavigationModalVisible={this.setNavigationModalVisible}
            score={this.state.score}
          />
          <BottomBar health={this.state.health} />
        </GameEngine>
      </ImageBackground>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};
