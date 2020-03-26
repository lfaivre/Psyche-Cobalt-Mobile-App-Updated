import React from 'react';
import { View, Text, Modal } from 'react-native';

import { Fonts } from '../../components/Fonts';
import { SCREEN_HEIGHT } from '../utilities';

export default class LoadingModal extends React.Component {
  render() {
    return (
      <Modal
        supportedOrientations={['portrait', 'landscape-left']}
        animationType="fade"
        transparent={false}
        visible={!this.props.imageLoaded}
        onRequestClose={() => {}}
      >
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>initializing</Text>
        </View>
      </Modal>
    );
  }
}

const styles = {
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1e2223'
  },
  loadingText: {
    marginVertical: SCREEN_HEIGHT * (1 / 32),
    color: 'white',
    fontSize: SCREEN_HEIGHT * (1 / 8),
    fontFamily: Fonts.RobotoLight
  }
};
