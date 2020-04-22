import React from 'react';
import { View, Image } from 'react-native';
import Matter from 'matter-js';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utilities';
import { WORLD } from '../../engine/physicsInit';

const healthImagePath = require('../../../assets/psychetap/powerups/Health.png');
const radius = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.09375) / 2;
const Create_Health_Matter = (posX, posY) => {
  return Matter.Bodies.circle(posX, posY, radius, {
    collisionFilter: {
      category: 0x0004,
      //   mask: 0x0001
    },
  });
};

class Health extends React.Component {
  constructor(props) {
    super(props);
    this.healthImagePath = healthImagePath;
  }

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
          styles.health,
          {
            left: x,
            top: y,
            width,
            height,
            borderRadius: width / 2,
          },
        ]}
      >
        <Image source={this.healthImagePath} style={styles.image} />
      </View>
    );
  }
}

const styles = {
  health: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
};

export { Health, Create_Health_Matter };
