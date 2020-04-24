import React from 'react';
import { View, Image } from 'react-native';
import Matter from 'matter-js';
import { SCREEN_WIDTH, SCREEN_HEIGHT, randomBetween } from '../../utilities';
import { WORLD } from '../../engine/physicsInit';
import styles from '../../styles/Truck.style';

const truckImagePath = require('../../../assets/psychetap/dangers/Truck.png');
const Create_Truck_Matter = (posX, posY) => {
  return Matter.Bodies.rectangle(
    posX,
    posY,
    Math.trunc(SCREEN_WIDTH * 0.3),
    Math.trunc(SCREEN_HEIGHT * 0.15),
    {
      collisionFilter: {
        category: 0x0002,
        mask: 0x0001,
      },
    }
  );
};

class Truck extends React.Component {
  constructor(props) {
    super(props);
    this.truckImagePath = truckImagePath;
  }

  componentDidMount() {
    console.log('MOUNT A TRUCK');
    // PsycheRover_Matter.render.sprite.texture = this.psycheRoverImagePath;
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
    this.props.body.render.sprite.texture = this.truckImagePath;

    return (
      <View
        style={[
          styles.truck,
          {
            left: x,
            top: y,
            width,
            height,
            borderRadius: width / 2,
          },
        ]}
      >
        <Image source={this.truckImagePath} style={styles.image} />
      </View>
    );
  }
}

export { Truck, Create_Truck_Matter };
