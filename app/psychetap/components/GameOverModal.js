import React from 'react';
import { View, Text, TouchableHighlight, Modal } from 'react-native';
import { GAMEVIEW_ENUM } from '../types';
import styles from '../styles/GameOverModal.style';

export default class GameOverModal extends React.Component {
  render() {
    return (
      <Modal
        supportedOrientations={['portrait', 'landscape-left']}
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {}}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.titleText}>Game Over</Text>
          <Text style={styles.scoreText}>Score: {this.props.score}</Text>
          <Text style={styles.scoreText}>{this.props.text}</Text>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={() => {
                this.props.setModalVisible(!this.props.modalVisible);
                this.props.handleGameReset();
                this.props.handleGameView(GAMEVIEW_ENUM.fact);
              }}
              style={styles.restartButton}
            >
              <Text style={styles.restartButtonText}>Restart</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                this.props.setModalVisible(!this.props.modalVisible);
                this.props.handleGameView(GAMEVIEW_ENUM.start);
              }}
              style={styles.exitButton}
            >
              <Text style={styles.exitButtonText}>Exit Game</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}
