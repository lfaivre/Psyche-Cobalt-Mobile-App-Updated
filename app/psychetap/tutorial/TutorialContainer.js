import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content } from 'native-base';
import { Fonts } from '../../components/Fonts';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utilities';
import { TUTORIAL_VIEWS } from './repo';

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

const styles = {
  topContent: {
    backgroundColor: 'transparent',
  },
  content: {
    width: SCREEN_WIDTH - SCREEN_WIDTH * (2 / 128),
    paddingTop: SCREEN_WIDTH * (1 / 128),
    paddingBottom: SCREEN_HEIGHT * (2 / 8) + SCREEN_WIDTH * (1 / 128),
    paddingHorizontal: SCREEN_WIDTH * (1 / 128),
    marginVertical: SCREEN_WIDTH * (1 / 128),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    // backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentSection: {
    // backgroundColor: 'purple',
    margin: SCREEN_WIDTH * (1 / 128),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContent: {
    height: SCREEN_HEIGHT * (1 / 8),
    resizeMode: 'contain',
  },
  container: {
    height: SCREEN_HEIGHT * (7 / 8) - SCREEN_WIDTH * (3 / 128),
    width: SCREEN_WIDTH - SCREEN_WIDTH * (2 / 128),
    paddingVertical: SCREEN_WIDTH * (1 / 128),
    paddingHorizontal: SCREEN_WIDTH * (1 / 128),
    marginVertical: SCREEN_WIDTH * (1 / 128),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    flexDirection: 'column',
    // justifyContent: 'space-around',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'coral',
  },
  title: {
    marginVertical: SCREEN_HEIGHT * (1 / 64),
    fontSize: SCREEN_HEIGHT * (1 / 8),
    // letterSpacing: 2,
    fontFamily: Fonts.BungeeRegular,
    // fontWeight: 'bold',
    textAlign: 'center',
    // color: 'white',
    color: '#bca0dc',
  },
  subtitle: {
    marginVertical: SCREEN_HEIGHT * (1 / 128),
    color: '#bca0dc',
    fontSize: SCREEN_HEIGHT * (1 / 16),
    fontFamily: Fonts.BungeeRegular,
  },
  bodyText: {
    width: Math.floor(SCREEN_WIDTH * 0.75),
    // padding: 16,
    marginVertical: SCREEN_WIDTH * (1 / 64),
    fontSize: SCREEN_HEIGHT * (1 / 20),
    fontFamily: Fonts.RobotoLight,
    // fontFamily: Fonts.BungeeRegular,
    textAlign: 'center',
    color: 'white',
    // backgroundColor: '#1e2223',
  },
};
