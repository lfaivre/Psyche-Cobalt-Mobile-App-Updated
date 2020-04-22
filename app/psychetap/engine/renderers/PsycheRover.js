import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Matter from 'matter-js';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utilities';
import { WORLD } from '../../engine/physicsInit';

const psycheRoverImagePath = require('../../../assets/psychetap/spacecraft/Psyche.png');
const PsycheRover_Matter = Matter.Bodies.rectangle(
  SCREEN_WIDTH / 2,
  SCREEN_HEIGHT * 0.75,
  Math.trunc(SCREEN_WIDTH * 0.3),
  Math.trunc(SCREEN_HEIGHT * 0.15),
  {
    isStatic: true,
    collisionFilter: {
      category: 0x0001,
      mask: 0x0002,
    },
  }
);

class PsycheRover extends React.Component {
  constructor(props) {
    super(props);
    this.psycheRoverImagePath = psycheRoverImagePath;
  }

  componentDidMount() {
    PsycheRover_Matter.render.sprite.texture = this.psycheRoverImagePath;
    Matter.World.add(WORLD, [this.props.body]);
  }

  componentWillUnmount() {
    Matter.World.remove(WORLD, [this.props.body]);
  }

  render() {
    const width = Math.trunc(SCREEN_WIDTH * 0.3);
    const height = Math.trunc(SCREEN_HEIGHT * 0.15);
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <View
        style={[
          styles.psycheRover,
          {
            left: x,
            top: y,
            width,
            height,
          },
        ]}
      >
        <Image source={this.psycheRoverImagePath} style={styles.image} />
      </View>
    );
  }
}

const styles = {
  psycheRover: {
    position: 'absolute',
    bottom: 10,
    top: Math.trunc(-SCREEN_HEIGHT / 3.7),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
};

export { PsycheRover, PsycheRover_Matter };
