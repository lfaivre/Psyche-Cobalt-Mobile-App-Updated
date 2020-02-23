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

const calcClearScreenSpeed = clearScreensPerSecond => {
  const framesPerSecond = 60;
  return Math.floor(framesPerSecond / clearScreensPerSecond);
};

const dangerOutsideOfBounds = (dangerBodyBounds, screenHeight) => {
  if (dangerBodyBounds.min.y >= screenHeight) {
    return true;
  }
  return false;
};

const touchWithinBounds = (dangerBodyBounds, touchPosition) => {
  if (
    touchPosition.x <= dangerBodyBounds.max.x + touchHandicap &&
    touchPosition.x >= dangerBodyBounds.min.x - touchHandicap &&
    touchPosition.y <= dangerBodyBounds.max.y + touchHandicap &&
    touchPosition.y >= dangerBodyBounds.min.y - touchHandicap
  ) {
    return true;
  }
  return false;
};

// NOTE :: VARIABLES

let frameCounter = 0;
let clearScreenSpeed = calcClearScreenSpeed(1 / 8);
let clearScreenVerticalSpeed = 6;
let touchHandicap = 0;
let running = false; // TODO: REFACTOR
let iterations = 0; // TODO: REFACTOR

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
      Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.09375) / 2
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

export const RemoveClearScreens = (entities, { touches }) => {
  for (clearScreen of entities.created.createdClearScreens) {
    if (
      dangerOutsideOfBounds(entities[clearScreen].body.bounds, SCREEN_HEIGHT)
    ) {
      delete entities[clearScreen];
      entities.created.createdClearScreens.splice(
        entities.created.createdClearScreens.indexOf(clearScreen),
        1
      );
    }
  }
  return entities;
};

export const AddPowerUpClearScreens = (entities, { touches, dispatch }) => {
  let touchPositions = [];

  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      const touchPosition = {
        x: t.event.pageX,
        y: t.event.pageY
      };
      touchPositions.push(touchPosition);
    });

  if (touchPositions.length !== 0) {
    for (let i = 0; i < touchPositions.length; i++) {
      const touchPosition = touchPositions[i];

      for (clearScreen of entities.created.createdClearScreens) {
        if (
          touchWithinBounds(entities[clearScreen].body.bounds, touchPosition)
        ) {
          delete entities[clearScreen];
          entities.created.createdClearScreens.splice(
            entities.created.createdClearScreens.indexOf(clearScreen),
            1
          );
          dispatch({ type: 'addPowerUpClearScreens' });
        }
      }
    }
  }
  return entities;
};

export const ClearScreensEffect = (entities, { touches, dispatch, events }) => {
  // TODO: Need to adjust score for each asteroid destroyed
  // TODO: Need a more elegant way of doing this...

  if (running) {
    if (iterations === 60) {
      running = false;
      iterations = 0;
    } else {
      for (asteroid of entities.created.createdAsteroids) {
        // console.log('ASTEROID AVAILABLE: ', asteroid);
        if (entities[asteroid]) {
          delete entities[asteroid];
          entities.created.createdAsteroids.splice(
            entities.created.createdAsteroids.indexOf(asteroid),
            1
          );
          dispatch({ type: 'setScore', value: 10 });
          // console.log('DELETE ASTEROID: ', asteroid);
        }
      }
      iterations++;
    }
  }

  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === 'effectClearScreens') {
        // console.log('ASTEROIDS AVAILABLE: ', entities.created.createdAsteroids);
        running = true;
      }
    }
  }
  return entities;
};

export const MoveClearScreens = (entities, { touches }) => {
  for (clearScreen of entities.created.createdClearScreens) {
    Matter.Body.translate(entities[clearScreen].body, {
      x: 0,
      y: clearScreenVerticalSpeed
    });
  }
  return entities;
};
