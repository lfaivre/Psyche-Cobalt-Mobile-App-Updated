import { Dimensions } from 'react-native';
import Matter from 'matter-js';

// SCREEN HEIGHT AND SCREEN WIDTH
const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

// BOX DIMENSIONS (TEMPORARY)
const BOX_SIZE = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.075);
const INITIAL_BOX = Matter.Bodies.rectangle(
  SCREEN_WIDTH / 2,
  SCREEN_HEIGHT / 2,
  BOX_SIZE,
  BOX_SIZE
);

// PSYCHEROVER DIMENSIONS
const PSYCHEROVER_WIDTH = Math.trunc(SCREEN_WIDTH * 0.15);
const PSYCHEROVER_HEIGHT = Math.trunc(SCREEN_HEIGHT * 0.075);
const INITIAL_PSYCHEROVER = Matter.Bodies.rectangle(
  SCREEN_WIDTH / 2,
  SCREEN_HEIGHT / 2,
  PSYCHEROVER_WIDTH,
  PSYCHEROVER_HEIGHT,
  { isStatic: true }
);

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  BOX_SIZE,
  INITIAL_BOX,
  PSYCHEROVER_WIDTH,
  PSYCHEROVER_HEIGHT,
  INITIAL_PSYCHEROVER
};
