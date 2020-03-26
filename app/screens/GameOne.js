import React from 'react';

// Components
import StartView from '../game/StartView';
import TutorialView from '../game/TutorialView';
import GameView from '../game/GameView';

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
        return <TutorialView handleGameView={this.handleGameView} />;
      case 'game':
        return <GameView handleGameView={this.handleGameView} />;
    }
  }
}
