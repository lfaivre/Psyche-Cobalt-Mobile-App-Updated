import React from 'react';
import { StatusBar } from 'react-native';
import { ScreenOrientation } from 'expo';
import { GameEngine } from 'react-native-game-engine';

import { PsycheRover } from '../game/renderers';
import { CreateBox, Physics } from '../game/systems';
import { ENGINE, WORLD } from '../game/init';

export default class GameOne extends React.Component {
  render() {
    return (
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
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
};
