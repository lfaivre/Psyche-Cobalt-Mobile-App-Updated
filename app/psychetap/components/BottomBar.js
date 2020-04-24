import React from 'react';
import { View, Text } from 'react-native';
import PowerUp from './PowerUp';
import { SCREEN_WIDTH } from '../utilities';
import styles from '../styles/BottomBar.style';

export default class BottomBar extends React.Component {
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
          <Text style={styles.healthText}>HEALTH {this.props.health}</Text>
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
