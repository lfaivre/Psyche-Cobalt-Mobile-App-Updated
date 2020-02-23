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

const calcHealth = (currentHealth, modifier) => {
  if (currentHealth + modifier < 0) {
    return 0;
  } else if (currentHealth + modifier >= 0 && currentHealth + modifier <= 100) {
    return currentHealth + modifier;
  } else if (currentHealth + modifier > 100) {
    return 100;
  } else {
    return null;
  }
};

const calcScore = (currentScore, modifier) => {
  if (currentScore + modifier < 0) {
    return 0;
  } else if (
    currentScore + modifier >= 0 &&
    currentScore + modifier <= Number.MAX_SAFE_INTEGER
  ) {
    return currentScore + modifier;
  } else if (currentScore + modifier > Number.MAX_SAFE_INTEGER) {
    return Number.MAX_SAFE_INTEGER;
  } else {
    return null;
  }
};

export { SCREEN_WIDTH, SCREEN_HEIGHT, randomBetween, calcHealth, calcScore };
