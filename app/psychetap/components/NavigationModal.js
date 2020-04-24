import React from 'react';
import { View, Text, TouchableHighlight, Modal } from 'react-native';
import { GAMEVIEW_ENUM } from '../types';
import styles from '../styles/NavigationModal.style';

export default class NavigationModal extends React.Component {
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
          <Text style={styles.titleText}>menu</Text>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={() => {
                this.props.setModalVisible(!this.props.modalVisible);
                this.props.handleGameView(GAMEVIEW_ENUM.start);
              }}
              style={styles.exitButton}
            >
              <Text style={styles.exitButtonText}>exit game</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                this.props.setModalVisible(!this.props.modalVisible);
                this.props.handleGameView(GAMEVIEW_ENUM.tutorial);
              }}
              style={styles.tutorialButton}
            >
              <Text style={styles.tutorialButtonText}>view tutorial</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                this.props.setModalVisible(!this.props.modalVisible);
              }}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelButtonText}>cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}
