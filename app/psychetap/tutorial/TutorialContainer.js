import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content } from 'native-base';
import { TUTORIAL_VIEWS } from './repo';
import styles from '../styles/TutorialContainer.style';

export default class TutorialContainer extends React.Component {
  render() {
    return (
      <Container style={styles.outerContainer}>
        <Content contentContainerStyle={styles.innerContainer}>
          <Text style={styles.title}>Tutorial</Text>
          {TUTORIAL_VIEWS.map((section) => {
            return (
              <View style={styles.section} key={section.title + Math.random()}>
                <Text style={styles.subtitle}>{section.title}</Text>
                <View style={styles.outerContent}>
                  {section.content.map((content) => {
                    return (
                      <View
                        key={content.id + Math.random()}
                        style={styles.innerContent}
                      >
                        <Text style={styles.text}>{content.text}</Text>
                        {content.imagePath && (
                          <Image
                            source={content.imagePath}
                            style={styles.image}
                          />
                        )}
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </Content>
      </Container>
    );
  }
}
