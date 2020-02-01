import React from 'react';
import { View } from 'react-native';

class PsycheRover extends React.Component {
  componentDidMount() {
    console.log('GAME: PsycheRover MOUNTED');
  }

  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <View
        style={[
          styles.psycheRover,
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
  psycheRover: {
    position: 'absolute'
  }
};

export { PsycheRover };
