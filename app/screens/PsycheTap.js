import React from 'react';

// Components
import StartView from '../psychetap/StartView';
import TutorialView from '../psychetap/TutorialView';
import FactView from '../psychetap/FactView';
import GameView from '../psychetap/GameView';
import { GAMEVIEW_ENUM } from '../psychetap/types';

export default class PsycheTap extends React.Component {
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
