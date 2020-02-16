import Matter from 'matter-js';
import { Clock, Create_Clock_Matter } from '../renderers/Clock';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  randomBetween
} from '../../../game/utilities';

// NOTE :: UTILITY FUNCTIONS

const calcClockSpeed = clockPerSecond => {
  const framesPerSecond = 60;
  return Math.floor(framesPerSecond / clockPerSecond);
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

let frameCounterClock = 0;
let clockScreenSpeed = calcClockSpeed(1 / 4);
let clockVerticalSpeed = 6;
let touchHandicap = 0;
let runningClock = false; // TODO: REFACTOR
let iterationsClock = 0; // TODO: REFACTOR

// NOTE :: SYSTEMS

export const DeployClocks = (entities, { touches }) => {
  frameCounterClock++;
  if (frameCounterClock === clockScreenSpeed) {
    let randomHorizontalPos = randomBetween(0, SCREEN_WIDTH - 1);
    let randomVerticalPos = 0;
    // let randomVerticalPos = randomBetween(0, SCREEN_HEIGHT - 1);

    let body = Create_Clock_Matter(
      randomHorizontalPos,
      randomVerticalPos,
      Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.09375) / 2
    );

    const clockGeneratedKey = `Clock${Math.random()}`;
    entities.created.createdClocks.push(clockGeneratedKey);

    entities[clockGeneratedKey] = {
      body: body,
      renderer: Clock
    };

    frameCounterClock = 0;
  }
  return entities;
};

export const RemoveClocks = (entities, { touches }) => {
  for (clock of entities.created.createdClocks) {
    if (dangerOutsideOfBounds(entities[clock].body.bounds, SCREEN_HEIGHT)) {
      delete entities[clock];
      entities.created.createdClocks.splice(
        entities.created.createdClocks.indexOf(clock),
        1
      );
    }
  }
  return entities;
};

export const AddPowerUpClocks = (entities, { touches, dispatch }) => {
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

      for (clock of entities.created.createdClocks) {
        if (touchWithinBounds(entities[clock].body.bounds, touchPosition)) {
          delete entities[clock];
          entities.created.createdClocks.splice(
            entities.created.createdClocks.indexOf(clock),
            1
          );
          dispatch({ type: 'addPowerUpClocks' });
        }
      }
    }
  }
  return entities;
};

// export const ClocksEffect = (entities, { touches, dispatch, events }) => {
//   // TODO: Need to adjust score for each asteroid destroyed
//   // TODO: Need a more elegant way of doing this...
//
//   if (runningClock) {
//     if (iterationsClock === 60) {
//       runningClock = false;
//       iterationsClock = 0;
//     } else {
//       for (asteroid of entities.created.createdAsteroids) {
//         // console.log('ASTEROID AVAILABLE: ', asteroid);
//         if (entities[asteroid]) {
//           delete entities[asteroid];
//           entities.created.createdAsteroids.splice(
//             entities.created.createdAsteroids.indexOf(asteroid),
//             1
//           );
//           // console.log('DELETE ASTEROID: ', asteroid);
//         }
//       }
//       iterationsClock++;
//     }
//   }
//
//   if (events.length) {
//     for (let i = 0; i < events.length; i++) {
//       if (events[i].type === 'effectClocks') {
//         // console.log('ASTEROIDS AVAILABLE: ', entities.created.createdAsteroids);
//         runningClock = true;
//       }
//     }
//   }
//   return entities;
// };

export const MoveClocks = (entities, { touches }) => {
  for (clock of entities.created.createdClocks) {
    Matter.Body.translate(entities[clock].body, {
      x: 0,
      y: clockVerticalSpeed
    });
  }
  return entities;
};
