import React from 'react';
import { Container, Content } from 'native-base';
import NavigationHeader from '../components/NavigationHeader.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#140025' }}>
        {/* Display the header, including access to the navigation menu */}
        <NavigationHeader {...this.props} />
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        ></Content>
      </Container>
    );
  }
}
