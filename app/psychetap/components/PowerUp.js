import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { POWERUP_ENUM } from '../engine/init';

const clearScreenImagePath = require('../../assets/psychetap/powerups/ClearScreen.png');
const clockImagePath = require('../../assets/psychetap/powerups/Clock.png');
const emptyImagePath = require('../../assets/psychetap/powerups/Empty.png');
const healthImagePath = require('../../assets/psychetap/powerups/Health.png');

export default class PowerUp extends React.Component {
  constructor(props) {
    super(props);
    this.clearScreenImagePath = clearScreenImagePath;
    this.clockImagePath = clockImagePath;
    this.emptyImagePath = emptyImagePath;
    this.healthImagePath = healthImagePath;
  }

  get imageUri() {
    switch (this.props.powerUp) {
      case POWERUP_ENUM.clearScreen:
        return this.clearScreenImagePath;
      case POWERUP_ENUM.clock:
        return this.clockImagePath;
      case POWERUP_ENUM.health:
        return this.healthImagePath;
      default:
        return this.emptyImagePath;
    }
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.handleActivatePowerUp(
            this.props.index,
            this.props.powerUp
          );
        }}
        underlayColor="transparent"
        style={styles.outerContainer}
      >
        <View style={styles.container}>
          <Image source={this.imageUri} style={styles.image} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  container: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
};
