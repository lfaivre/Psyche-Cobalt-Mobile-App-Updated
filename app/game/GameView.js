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
    powerUps: ['empty', 'empty', 'empty'],
    statusHealth: 100,
    statusScore: 0
  };

  _isMounted = false;
  _gameEngineRef = null;

  // NOTE :: LIFECYCLE HOOKS

  componentDidMount() {
    this._isMounted = true;
    this.resetGame();
    this.runCollisionHandler();
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
            statusHealth: 100,
            statusScore: 0,
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
      }
    });
  };

  onEvent = e => {
    if (e.type === 'setStatusHealth') {
      const newHealth = e.value;
      this.setState({ statusHealth: newHealth });
    } else if (e.type === 'setStatusScore') {
      const newScore = e.value;
      this.setState({ statusScore: newScore });
    } else if (e.type === 'addPowerUpToBar') {
      for (const powerUpIndex in this.state.powerUps) {
        if (this.state.powerUps[powerUpIndex] === 'empty') {
          let powerUps = this.state.powerUps;
          powerUps.splice(powerUpIndex, 1, e.value);
          this.setState({ powerUps: powerUps });
          return;
        }
      }
    } else if (e.type === 'activatePowerUp') {
      let powerUps = this.state.powerUps;
      powerUps.splice(e.index, 1, 'empty');
      this.setState({ powerUps: powerUps }, () => {
        switch (e.value) {
          case 'clearScreen':
            this._gameEngineRef.dispatch({ type: 'effectClearScreens' });
            break;
          case 'clock':
            this._gameEngineRef.dispatch({ type: 'effectClock' });
            break;
          case 'health':
            this._gameEngineRef.dispatch({ type: 'setHealth', value: 10 });
            break;
          default:
            break;
        }
      });
    } else if (e.type === 'gameOver') {
      this.setState({ systems: [Reset] }, () => {
        this._gameEngineRef.dispatch({ type: 'beginCleanup' });
      });
    } else if (e.type === 'endCleanup') {
      console.log('RESET ENTITIES COMPLETE');
      this.stopGame();
      this.setGameOverModalVisible(true);
    }
  };

  handleActivatePowerUp = (index, value) => {
    this._gameEngineRef.dispatch({
      type: 'activatePowerUp',
      index: index,
      value: value
    });
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
            score={this.state.statusScore}
            handleGameReset={this.resetGame}
          />
          <TopBar
            setNavigationModalVisible={this.setNavigationModalVisible}
            score={this.state.statusScore}
          />
          <BottomBar
            health={this.state.statusHealth}
            powerUps={this.state.powerUps}
            handleActivatePowerUp={this.handleActivatePowerUp}
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
