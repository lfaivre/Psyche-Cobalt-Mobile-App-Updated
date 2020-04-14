import React from 'react';

// Components
import StartView from '../game/StartView';
import TutorialView from '../game/TutorialView';
import FactView from '../game/FactView';
import GameView from '../game/GameView';
import { GAMEVIEW_ENUM } from '../game/types';

export default class GameOne extends React.Component {
  state = { gameView: GAMEVIEW_ENUM.start };

  handleGameView = (view) => {
    this.setState({ gameView: view });
  };

  render() {
    switch (this.state.gameView) {
      case GAMEVIEW_ENUM.start:
        return (
          <StartView {...this.props} handleGameView={this.handleGameView} />
        );
      case GAMEVIEW_ENUM.fact:
        return <FactView handleGameView={this.handleGameView} />;
      case GAMEVIEW_ENUM.tutorial:
        return <TutorialView handleGameView={this.handleGameView} />;
      case GAMEVIEW_ENUM.game:
        return <GameView handleGameView={this.handleGameView} />;
    }
  }
}
