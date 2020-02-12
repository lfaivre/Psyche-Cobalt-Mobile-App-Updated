import React from 'react';
import { StatusBar, Alert, ImageBackground } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';

// Components
import LoadingModal from './components/LoadingModal';
import NavigationModal from './components/NavigationModal';
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
  RemoveAsteroids
} from './engine/systems';

export default class GameView extends React.Component {
  state = {
    running: true,
    imageLoaded: false,
    health: 100,
    modalVisible: false
  };
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.reset();
    // TODO: filter collisions (damage only from asteroid/danger and psyche rover)
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

  // View Handlers
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

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
    Matter.World.clear(WORLD);
    Matter.Engine.clear(ENGINE);
    this.engine.swap({
      physics: {
        engine: ENGINE,
        world: WORLD
      },
      created: {
        createdAsteroids: []
      },
      psycheRover: {
        body: PsycheRover_Matter,
        renderer: PsycheRover
      }
    });
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
          this.setState({ imageLoaded: true });
        }}
      >
        <LoadingModal imageLoaded={this.state.imageLoaded} />
        <GameEngine
          ref={ref => {
            this.engine = ref;
          }}
          style={styles.container}
          systems={[
            Physics,
            DeployAsteroids,
            DestroyAsteroids,
            RemoveAsteroids
          ]}
          entities={{
            physics: {
              engine: ENGINE,
              world: WORLD
            },
            created: {
              createdAsteroids: []
            },
            psycheRover: {
              body: PsycheRover_Matter,
              renderer: PsycheRover
            }
          }}
          running={this.state.running}
          onEvent={this.onEvent}
        >
          <StatusBar hidden={true} />
          <NavigationModal
            modalVisible={this.state.modalVisible}
            setModalVisible={this.setModalVisible}
            handleGameView={this.props.handleGameView}
          />
          <TopBar setModalVisible={this.setModalVisible} />
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
