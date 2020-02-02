import React from 'react';

import Introduction from './Introduction';
import Basics from './Basics';

export default class TutorialContainer extends React.Component {
  render() {
    switch (this.props.index) {
      case 0:
        return <Introduction />;
      case 1:
        return <Basics />;
    }
  }
}
