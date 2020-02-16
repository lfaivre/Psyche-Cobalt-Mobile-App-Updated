import Matter from 'matter-js';
import {
  ClearScreen,
  Create_ClearScreen_Matter
} from '../renderers/ClearScreen';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  randomBetween
} from '../../../game/utilities';

// NOTE :: UTILITY FUNCTIONS

const calcClearScreenSpeed = asteroidsPerSecond => {
  const framesPerSecond = 60;
  return Math.floor(framesPerSecond / asteroidsPerSecond);
};

// NOTE :: VARIABLES

let frameCounter = 0;
let clearScreenSpeed = calcClearScreenSpeed(1 / 4);
let clearScreenVerticalSpeed = 7.5;

// NOTE :: SYSTEMS

export const DeployClearScreens = (entities, { touches }) => {
  frameCounter++;
  if (frameCounter === clearScreenSpeed) {
    let randomHorizontalPos = randomBetween(0, SCREEN_WIDTH - 1);
    let randomVerticalPos = 0;
    // let randomVerticalPos = randomBetween(0, SCREEN_HEIGHT - 1);

    let body = Create_ClearScreen_Matter(
      randomHorizontalPos,
      randomVerticalPos,
      Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.0625) / 2
    );

    const clearScreenGeneratedKey = `ClearScreen${Math.random()}`;
    entities.created.createdClearScreens.push(clearScreenGeneratedKey);

    entities[clearScreenGeneratedKey] = {
      body: body,
      renderer: ClearScreen
    };

    frameCounter = 0;
  }
  return entities;
};

export const MoveClearScreen = (entities, { touches }) => {
  for (clearScreen of entities.created.createdClearScreens) {
    Matter.Body.translate(entities[clearScreen].body, {
      x: 0,
      y: clearScreenVerticalSpeed
    });
  }
  return entities;
};
