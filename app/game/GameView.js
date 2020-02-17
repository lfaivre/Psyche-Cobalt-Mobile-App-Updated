import React from 'react';
import { View, StatusBar, ImageBackground } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';

// Components
import LoadingModal from './components/LoadingModal';
import NavigationModal from './components/NavigationModal';
import GameOverModal from './components/GameOverModal';
import BottomBar from './components/BottomBar';
import TopBar from './components/TopBar';

// Game Engine
import { ENGINE, WORLD } from './engine/physicsInit';
import { defaultEntities } from './engine/gameInit';

// GAME ENGINE :: SYSTEMS
import { systems } from './engine/systems';
import { Reset } from './engine/systems/reset';

export default class GameView extends React.Component {
  state = {
    navigationModalVisible: false,
    gameOverModalVisible: false,
    running: true,
    systems: systems,
    health: 100,
    score: 0,
    powerUps: ['empty', 'empty', 'empty']
  };

  _isMounted = false;
  _gameEngineRef = null;

  // NOTE :: LIFECYCLE HOOKS

  componentDidMount() {
    this._isMounted = true;
    this.resetGame();
    this.runCollisionHandler();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.health !== prevState.health && this.state.health === 0) {
      // TODO: Move to systems
      this.setState({ systems: [Reset] }, () => {
        this._gameEngineRef.dispatch({ type: 'gameOver' });
      });
    }
  }

  componentWillUnmount() {
    this.stopGame();
    this._isMounted = false;
  }

  // NOTE :: MODAL HANDLERS

  setNavigationModalVisible = visible => {
    this.setState({ navigationModalVisible: visible });
  };

  setGameOverModalVisible = visible => {
    this.setState({ gameOverModalVisible: visible });
  };

  // NOTE :: GAME INITIALIZATION, STOP, AND RESET

  setEngineRef = ref => {
    this._gameEngineRef = ref;
  };

  stopGame = () => {
    if (this._isMounted && this._gameEngineRef) {
      console.log('STOP GAME');
      this.setState({ running: false, systems: [] });
    }
  };

  resetGame = () => {
    if (this._isMounted && this._gameEngineRef) {
      console.log('RESET GAME');
      Matter.World.clear(WORLD);
      Matter.Engine.clear(ENGINE);
      this._gameEngineRef.swap(defaultEntities());
      this.setState(
        {
          running: true
        },
        () => {
          this.setState({
            systems: systems,
            health: 100,
            score: 0,
            powerUps: ['empty', 'empty', 'empty']
          });
        }
      );
    }
  };

  // NOTE :: GAME HANDLERS

  runCollisionHandler = () => {
    Matter.Events.on(ENGINE, 'collisionStart', e => {
      if (
        this._isMounted &&
        this._gameEngineRef &&
        (!e.pairs[0].bodyA.isStatic || !e.pairs[0].bodyB.isStatic)
      ) {
        let id = null;
        if (!e.pairs[0].bodyA.isStatic) {
          id = e.pairs[0].bodyA.id;
        } else if (!e.pairs[0].bodyB.isStatic) {
          id = e.pairs[0].bodyB.id;
        }
        this._gameEngineRef.dispatch({
          type: 'asteroidCollision',
          id: id
        });

        // TODO: Move to systems
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
  };

  onEvent = e => {
    // console.log('EVENT: ', e);
    if (e.type === 'resetComplete') {
      console.log('RESET ENTITIES COMPLETE');
      this.stopGame();
      this.setGameOverModalVisible(true);
    } else if (e.type === 'addPowerUpClearScreens') {
      for (const powerUpIndex in this.state.powerUps) {
        if (this.state.powerUps[powerUpIndex] === 'empty') {
          let powerUps = this.state.powerUps;
          powerUps.splice(powerUpIndex, 1, 'clearScreen');
          this.setState({ powerUps: powerUps });
          return;
        }
      }
    } else if (e.type === 'addPowerUpClocks') {
      for (const powerUpIndex in this.state.powerUps) {
        if (this.state.powerUps[powerUpIndex] === 'empty') {
          let powerUps = this.state.powerUps;
          powerUps.splice(powerUpIndex, 1, 'clock');
          this.setState({ powerUps: powerUps });
          return;
        }
      }
    } else if (e.type === 'addPowerUpHealths') {
      for (const powerUpIndex in this.state.powerUps) {
        if (this.state.powerUps[powerUpIndex] === 'empty') {
          let powerUps = this.state.powerUps;
          powerUps.splice(powerUpIndex, 1, 'health');
          this.setState({ powerUps: powerUps });
          return;
        }
      }
    } else if (e.type === 'activateClearScreen') {
      let powerUps = this.state.powerUps;
      powerUps.splice(e.index, 1, 'empty');
      this.setState({ powerUps: powerUps }, () => {
        this._gameEngineRef.dispatch({ type: 'effectClearScreens' });
        // console.log('ACTIVATED POWERUP CLEAR SCREEN');
      });
    } else if (e.type === 'activateClock') {
      let powerUps = this.state.powerUps;
      powerUps.splice(e.index, 1, 'empty');
      this.setState({ powerUps: powerUps }, () => {
        this._gameEngineRef.dispatch({ type: 'effectClock' });
        // console.log('ACTIVATED POWERUP CLOCK');
      });
    } else if (e.type === 'activateHealth') {
      let powerUps = this.state.powerUps;
      powerUps.splice(e.index, 1, 'empty');
      this.setState({ powerUps: powerUps }, () => {
        // this._gameEngineRef.dispatch({type: ''});
        let newHealth = 0;
        if (this.state.health + 10 <= 100) {
          newHealth = this.state.health + 10;
        } else if (this.state.health + 10 > 100) {
          newHealth = 100;
        }
        this.setState({ health: newHealth });
        // console.log('ACTIVATED POWERUP HEALTH');
      });
    } else if (e.type === 'destroyAsteroid') {
      const newScore = this.state.score + 10;
      this.setState({ score: newScore });
    }
  };

  emitEngineEvent = (event, index) => {
    this._gameEngineRef.dispatch({ type: event, index: index });
  };

  render() {
    return (
      <View style={styles.outerContainer}>
        <LoadingModal imageLoaded={true} />
        <GameEngine
          ref={this.setEngineRef}
          running={this.state.running}
          style={styles.innerContainer}
          systems={this.state.systems}
          entities={defaultEntities()}
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
            score={this.state.score}
            handleGameReset={this.resetGame}
          />
          <TopBar
            setNavigationModalVisible={this.setNavigationModalVisible}
            score={this.state.score}
          />
          <BottomBar
            health={this.state.health}
            powerUps={this.state.powerUps}
            emitEngineEvent={this.emitEngineEvent}
          />
        </GameEngine>
      </View>
    );
  }
}

const styles = {
  outerContainer: {
    flex: 1,
    backgroundColor: '#1e2223'
  },
  innerContainer: {
    flex: 1
  }
};
