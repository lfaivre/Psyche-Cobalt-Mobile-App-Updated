import React from 'react';
import { View, Image } from 'react-native';
import Matter from 'matter-js';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utilities';
import { WORLD } from '../../engine/physicsInit';

const clearScreenImagePath = require('../../../assets/psychetap/powerups/ClearScreen.png');
const radius = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.09375) / 2;
const Create_ClearScreen_Matter = (posX, posY) => {
  return Matter.Bodies.circle(posX, posY, radius, {
    collisionFilter: {
      category: 0x0004,
      //   mask: 0x0001
    },
  });
};

class ClearScreen extends React.Component {
  constructor(props) {
    super(props);
    this.clearScreenImagePath = clearScreenImagePath;
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
          styles.clearScreen,
          {
            left: x,
            top: y,
            width,
            height,
            borderRadius: width / 2,
          },
        ]}
      >
        <Image source={this.clearScreenImagePath} style={styles.image} />
      </View>
    );
  }
}

const styles = {
  clearScreen: {
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

export { ClearScreen, Create_ClearScreen_Matter };
