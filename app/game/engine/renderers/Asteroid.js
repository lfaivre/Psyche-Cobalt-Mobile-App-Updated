import React from 'react';
import { View } from 'react-native';
import Matter from 'matter-js';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utilities';
import { WORLD } from '../../engine/init';

const Create_Asteroid_Matter = (posX, posY, radius) => {
  return Matter.Bodies.circle(posX, posY, radius);
};

// TODO: include nextMove: int (slow down default 60fps)
// TODO: include updateFrequency: int (slow down default 60fps)
// TODO: xspeed, yspeed

class Asteroid extends React.Component {
  componentDidMount() {
    Matter.World.add(WORLD, [this.props.body]);
    // console.log('PSYCHE BOUNDS: ', this.props.body.bounds);
  }

  componentWillUnmount() {
    Matter.World.remove(WORLD, [this.props.body]);
  }

  render() {
    const width = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.075);
    const height = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.075);
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
            borderRadius: width / 2
          }
        ]}
      />
    );
  }
}

const styles = {
  asteroid: {
    position: 'absolute',
    backgroundColor: '#bfbfbf'
  }
};

export { Asteroid, Create_Asteroid_Matter };
