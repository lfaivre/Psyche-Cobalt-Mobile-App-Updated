import React from 'react';
import { Container, Content, Text } from 'native-base';
import NavigationHeader from '../components/NavigationHeader.js';

export default class GameTwo extends React.Component {
  render() {
    return (
      <Container>
        <NavigationHeader {...this.props} />
        <Content>
          <Text>Game Two</Text>
        </Content>
      </Container>
    );
  }
}
