import React from 'react';
import { View } from 'react-native';
import Matter from 'matter-js';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utilities';
import { WORLD } from '../../engine/init';

const Create_ClearScreen_Matter = (posX, posY, radius) => {
  return Matter.Bodies.circle(posX, posY, radius, {
    collisionFilter: {
      category: 0x0004
      //   mask: 0x0001
    }
  });
};

class ClearScreen extends React.Component {
  componentDidMount() {
    Matter.World.add(WORLD, [this.props.body]);
  }

  componentWillUnmount() {
    Matter.World.remove(WORLD, [this.props.body]);
  }

  render() {
    const width = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.09375);
    const height = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.09375);
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
    backgroundColor: '#DB7F8E'
  }
};

export { ClearScreen, Create_ClearScreen_Matter };
