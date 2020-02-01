import React from 'react';
import { View } from 'react-native';

class Asteroid extends React.Component {
  componentDidMount() {
    console.log('GAME: Asteroid MOUNTED');
  }

  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <View
        style={[
          styles.asteroid,
          {
            left: x,
            top: y,
            width: width,
            height: height,
            borderRadius: width / 2,
            backgroundColor: this.props.color || '#bfbfbf'
          }
        ]}
      />
    );
  }
}

const styles = {
  asteroid: {
    position: 'absolute'
  }
};

export { Asteroid };
