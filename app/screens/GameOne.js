import React from 'react';

// Components
import GameView from '../game/GameView';
import StartView from '../game/StartView';

export default class GameOne extends React.Component {
  state = { gameView: false };

  handleGameView = setReady => {
    this.setState({ gameView: setReady });
  };

  render() {
    return this.state.gameView ? (
      <GameView handleGameView={this.handleGameView} />
    ) : (
      <StartView {...this.props} handleGameView={this.handleGameView} />
    );
  }
}
