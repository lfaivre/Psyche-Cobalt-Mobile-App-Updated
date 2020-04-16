import React from 'react';
import { View } from 'react-native';
import Matter from 'matter-js';
import Emoji from 'react-native-emoji';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utilities';
import { WORLD } from '../../engine/physicsInit';

const radius = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.09375) / 2;

const Create_Health_Matter = (posX, posY) => {
  return Matter.Bodies.circle(posX, posY, radius, {
    collisionFilter: {
      category: 0x0004
      //   mask: 0x0001
    }
  });
};

class Health extends React.Component {
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
      >
        <Emoji name="hammer_and_wrench" style={{ fontSize: radius }} />
      </View>
    );
  }
}

const styles = {
  asteroid: {
    position: 'absolute',
    backgroundColor: '#A4FBA6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Health, Create_Health_Matter };
