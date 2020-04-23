import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content } from 'native-base';
import { TUTORIAL_VIEWS } from './repo';
import styles from '../styles/TutorialContainer.style';

export default class TutorialContainer extends React.Component {
  render() {
    return (
      <Container style={styles.topContent}>
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.title}>Tutorial</Text>
          <Text style={styles.subtitle}>
            {TUTORIAL_VIEWS[this.props.index].title}
          </Text>
          <View>
            {TUTORIAL_VIEWS[this.props.index].content.map((content) => {
              return (
                <View
                  key={content.id + Math.random()}
                  style={styles.contentSection}
                >
                  <Text style={styles.bodyText}>{content.text}</Text>
                  {content.imagePath && (
                    <Image
                      source={content.imagePath}
                      style={styles.imageContent}
                    />
                  )}
                </View>
              );
            })}
          </View>
        </Content>
      </Container>
    );
  }
}
