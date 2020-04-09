import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PowerUp from './PowerUp';
import { Fonts } from '../../components/Fonts';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utilities';

export default class BottomBar extends React.Component {
  padHealthStatus = (health, padSize) => {
    return ('000000000' + health).substr(-padSize);
  };

  render() {
    return (
      <View style={styles.bottomBarContainer}>
        <View style={styles.powerUpContainer}>
          <View style={styles.powerUpCircle}>
            {this.props.powerUps[0] && (
              <PowerUp
                powerUp={this.props.powerUps[0]}
                index={0}
                handleActivatePowerUp={this.props.handleActivatePowerUp}
              />
            )}
          </View>
          <View style={styles.powerUpCircle}>
            {this.props.powerUps[1] && (
              <PowerUp
                powerUp={this.props.powerUps[1]}
                index={1}
                handleActivatePowerUp={this.props.handleActivatePowerUp}
              />
            )}
          </View>
          <View style={styles.powerUpCircle}>
            {this.props.powerUps[2] && (
              <PowerUp
                powerUp={this.props.powerUps[2]}
                index={2}
                handleActivatePowerUp={this.props.handleActivatePowerUp}
              />
            )}
          </View>
        </View>
        <View style={styles.healthContainer}>
          <Text style={styles.healthText}>
            HEALTH {this.padHealthStatus(this.props.health, 3)}
          </Text>
          <View
            style={[
              styles.healthBar,
              { width: SCREEN_WIDTH * (1 / 2) * (this.props.health / 100) },
            ]}
          ></View>
        </View>
      </View>
    );
  }
}

const styles = {
  bottomBarContainer: {
    height: SCREEN_HEIGHT * (3 / 16),
    width: SCREEN_WIDTH - SCREEN_WIDTH * (2 / 128),
    marginVertical: SCREEN_WIDTH * (1 / 128),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    position: 'absolute',
    top: SCREEN_HEIGHT - SCREEN_HEIGHT * (3 / 16) - SCREEN_WIDTH * (2 / 128),
    // top: (111 * SCREEN_HEIGHT) / 128,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'green'
  },
  powerUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'purple'
  },
  powerUpCircle: {
    height: SCREEN_HEIGHT * (3 / 16),
    width: SCREEN_HEIGHT * (3 / 16),
    padding: SCREEN_WIDTH * (1 / 128),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    // backgroundColor: 'red'
  },
  healthContainer: {
    width: SCREEN_WIDTH * (1 / 2),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor: 'blue'
  },
  healthText: {
    marginBottom: SCREEN_WIDTH * (1 / 128),
    color: '#bca0dc',
    fontSize: SCREEN_HEIGHT * (1 / 24),
    fontFamily: Fonts.BungeeRegular,
  },
  healthBar: {
    height: SCREEN_HEIGHT * (1 / 32),
    // width: SCREEN_WIDTH * (1 / 2),
    borderRadius: SCREEN_HEIGHT * (1 / 64),
    backgroundColor: 'rgba(164,251,166, 1)',
  },
};
