import React from 'react';
import { View } from 'react-native';

class PsycheRover extends React.Component {
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <View
        style={[
          styles.psycherover,
          {
            left: x,
            top: y,
            width: width,
            height: height,
            backgroundColor: this.props.color || 'black'
          }
        ]}
      />
    );
  }
}

const styles = {
  psycherover: {
    position: 'absolute'
  }
};

export { PsycheRover };
