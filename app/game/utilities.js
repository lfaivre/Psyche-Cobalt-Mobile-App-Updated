import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

let SCREEN_WIDTH = 0;
let SCREEN_HEIGHT = 0;

// TEMPORARY TO WORK AROUND ERROR
if (width > height) {
  SCREEN_WIDTH = width;
  SCREEN_HEIGHT = height;
} else {
  SCREEN_WIDTH = height;
  SCREEN_HEIGHT = width;
}

const randomBetween = (min, max) => {
  return (Math.random() * (max - min + 1)) << 0;
};

export { SCREEN_WIDTH, SCREEN_HEIGHT, randomBetween };
