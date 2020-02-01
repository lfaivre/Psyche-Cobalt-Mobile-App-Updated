import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

// TEMPORARY TO WORK AROUND ERROR
let SCREEN_WIDTH = 0;
let SCREEN_HEIGHT = 0;

if (width > height) {
  SCREEN_WIDTH = width;
  SCREEN_HEIGHT = height;
} else {
  SCREEN_WIDTH = height;
  SCREEN_HEIGHT = width;
}

export { SCREEN_WIDTH, SCREEN_HEIGHT };
