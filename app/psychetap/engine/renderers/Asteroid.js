import React from 'react';
import { View, Image } from 'react-native';
import Matter from 'matter-js';
import { SCREEN_WIDTH, SCREEN_HEIGHT, randomBetween } from '../../utilities';
import { WORLD } from '../../engine/physicsInit';

const asteroidImagePaths = [
  require('../../../assets/psychetap/dangers/Asteroid1.png'),
  require('../../../assets/psychetap/dangers/Asteroid2.png'),
  require('../../../assets/psychetap/dangers/Asteroid3.png'),
];
const radius = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.125) / 2;
const Create_Asteroid_Matter = (posX, posY) => {
  return Matter.Bodies.circle(posX, posY, radius, {
    collisionFilter: {
      category: 0x0002,
      mask: 0x0001,
    },
  });
};

class Asteroid extends React.Component {
  constructor(props) {
    super(props);
    this.imageURI = this.asteroidImage;
  }

  get asteroidImage() {
    return asteroidImagePaths[randomBetween(0, asteroidImagePaths.length - 1)];
  }

  componentDidMount() {
    Matter.World.add(WORLD, [this.props.body]);
  }

  componentWillUnmount() {
    Matter.World.remove(WORLD, [this.props.body]);
  }

  render() {
    const width = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.125);
    const height = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.125);
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <View
        style={[
          styles.asteroid,
          {
            left: x,
            top: y,
            width,
            height,
            borderRadius: width / 2,
          },
        ]}
      >
        <Image source={this.imageURI} style={styles.image} />
      </View>
    );
  }
}

const styles = {
  asteroid: {
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

export { Asteroid, Create_Asteroid_Matter };
