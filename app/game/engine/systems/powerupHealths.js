import Matter from 'matter-js';
import { Health, Create_Health_Matter } from '../renderers/Health';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  randomBetween
} from '../../../game/utilities';

// NOTE :: UTILITY FUNCTIONS

const calcHealthSpeed = healthPerSecond => {
  const framesPerSecond = 60;
  return Math.floor(framesPerSecond / healthPerSecond);
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

let frameCounterHealth = 0;
let healthScreenSpeed = calcHealthSpeed(1 / 4);
let healthVerticalSpeed = 6;
let touchHandicap = 0;
let runningHealth = false; // TODO: REFACTOR
let iterationsHealth = 0; // TODO: REFACTOR

// NOTE :: SYSTEMS

export const DeployHealths = (entities, { touches }) => {
  frameCounterHealth++;
  if (frameCounterHealth === healthScreenSpeed) {
    let randomHorizontalPos = randomBetween(0, SCREEN_WIDTH - 1);
    let randomVerticalPos = 0;
    // let randomVerticalPos = randomBetween(0, SCREEN_HEIGHT - 1);

    let body = Create_Health_Matter(
      randomHorizontalPos,
      randomVerticalPos,
      Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.09375) / 2
    );

    const healthGeneratedKey = `Health${Math.random()}`;
    entities.created.createdHealths.push(healthGeneratedKey);

    entities[healthGeneratedKey] = {
      body: body,
      renderer: Health
    };

    frameCounterHealth = 0;
  }
  return entities;
};

export const RemoveHealths = (entities, { touches }) => {
  for (health of entities.created.createdHealths) {
    if (dangerOutsideOfBounds(entities[health].body.bounds, SCREEN_HEIGHT)) {
      delete entities[health];
      entities.created.createdHealths.splice(
        entities.created.createdHealths.indexOf(health),
        1
      );
    }
  }
  return entities;
};

export const AddPowerUpHealths = (entities, { touches, dispatch }) => {
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

      for (health of entities.created.createdHealths) {
        if (touchWithinBounds(entities[health].body.bounds, touchPosition)) {
          delete entities[health];
          entities.created.createdHealths.splice(
            entities.created.createdHealths.indexOf(health),
            1
          );
          dispatch({ type: 'addPowerUpHealths' });
        }
      }
    }
  }
  return entities;
};

// export const HealthsEffect = (entities, { touches, dispatch, events }) => {
//   // TODO: Need to adjust score for each asteroid destroyed
//   // TODO: Need a more elegant way of doing this...
//
//   if (runningHealth) {
//     if (iterationsHealth === 60) {
//       runningHealth = false;
//       iterationsHealth = 0;
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
//       iterationsHealth++;
//     }
//   }
//
//   if (events.length) {
//     for (let i = 0; i < events.length; i++) {
//       if (events[i].type === 'effectHealths') {
//         // console.log('ASTEROIDS AVAILABLE: ', entities.created.createdAsteroids);
//         runningHealth = true;
//       }
//     }
//   }
//   return entities;
// };

export const MoveHealths = (entities, { touches }) => {
  for (health of entities.created.createdHealths) {
    Matter.Body.translate(entities[health].body, {
      x: 0,
      y: healthVerticalSpeed
    });
  }
  return entities;
};
