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
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

const calcDensity = density => {
  const framesPerSecond = 60;
  return Math.floor(framesPerSecond / density);
};

const outsideOfVerticalBounds = bounds => {
  const screenHeight = SCREEN_HEIGHT;
  return bounds.min.y >= screenHeight;
};

const touchHandicap = 0;
const touchWithinBounds = (bounds, touchPosition) => {
  return (
    touchPosition.x <= bounds.max.x + touchHandicap &&
    touchPosition.x >= bounds.min.x - touchHandicap &&
    touchPosition.y <= bounds.max.y + touchHandicap &&
    touchPosition.y >= bounds.min.y - touchHandicap
  );
};

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  randomBetween,
  calcHealth,
  calcScore,
  calcDensity,
  outsideOfVerticalBounds,
  touchWithinBounds
};
