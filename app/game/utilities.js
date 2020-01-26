import { Dimensions } from 'react-native';
import Matter from 'matter-js';

// SCREEN HEIGHT AND SCREEN WIDTH
const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

// BOX DIMENSIONS (TEMPORARY)
const BOXSIZE = Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.075);
const INITIALBOX = Matter.Bodies.rectangle(
  SCREEN_WIDTH / 2,
  SCREEN_HEIGHT / 2,
  BOXSIZE,
  BOXSIZE
);

export { SCREEN_WIDTH, SCREEN_HEIGHT, BOXSIZE, INITIALBOX };
