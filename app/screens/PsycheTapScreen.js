import React from 'react';
import StartView from '../psychetap/views/StartView';
import TutorialView from '../psychetap/views/TutorialView';
import FactView from '../psychetap/views/FactView';
import GameView from '../psychetap/views/GameView';
import { GAMEVIEW_ENUM } from '../psychetap/types';

export default class PsycheTapScreen extends React.Component {
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
