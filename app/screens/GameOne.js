import React from 'react';

// Components
import GameView from '../game/GameView';
import StartView from '../game/StartView';

export default class GameOne extends React.Component {
  state = { ready: false };

  handlePress = setReady => {
    this.setState({ ready: setReady });
  };

  render() {
    return this.state.ready ? (
      <GameView handlePress={this.handlePress} />
    ) : (
      <StartView {...this.props} handlePress={this.handlePress} />
    );
  }
}
