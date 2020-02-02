import React from 'react';

// Components
import GameView from '../game/GameView';
import StartView from '../game/StartView';

export default class GameOne extends React.Component {
  state = { gameView: 'start' };

  handleGameView = view => {
    this.setState({ gameView: view });
  };

  render() {
    switch (this.state.gameView) {
      case 'start':
        return (
          <StartView {...this.props} handleGameView={this.handleGameView} />
        );
      case 'tutorial':
        return (
          <StartView {...this.props} handleGameView={this.handleGameView} />
        );
      case 'game':
        return <GameView handleGameView={this.handleGameView} />;
    }
  }
}
