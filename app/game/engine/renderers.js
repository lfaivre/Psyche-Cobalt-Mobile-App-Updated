import React from 'react';
import { View, Image } from 'react-native';

class Asteroid extends React.Component {
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <View
        style={[
          styles.box,
          {
            left: x,
            top: y,
            width: width,
            height: height,
            borderRadius: width / 2,
            backgroundColor: this.props.color || '#bfbfbf'
          }
        ]}
      />
    );
  }
}

class PsycheRover extends React.Component {
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <View
        style={[
          styles.box,
          {
            left: x,
            top: y,
            width: width,
            height: height,
            backgroundColor: this.props.color || '#bca0dc'
          }
        ]}
      ></View>
    );
  }
}

const styles = {
  box: {
    position: 'absolute'
  },
  psycheRover: {}
};

export { Asteroid, PsycheRover };
