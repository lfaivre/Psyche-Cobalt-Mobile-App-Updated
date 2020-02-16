import Matter from 'matter-js';
import { Asteroid, Create_Asteroid_Matter } from '../renderers/Asteroid';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  randomBetween
} from '../../../game/utilities';

// NOTE :: UTILITY FUNCTIONS

const calcAsteroidSpeed = asteroidsPerSecond => {
  const framesPerSecond = 60;
  return Math.floor(framesPerSecond / asteroidsPerSecond);
};

const touchWithinBounds = (asteroidBodyBounds, touchPosition) => {
  if (
    touchPosition.x <= asteroidBodyBounds.max.x + touchHandicap &&
    touchPosition.x >= asteroidBodyBounds.min.x - touchHandicap &&
    touchPosition.y <= asteroidBodyBounds.max.y + touchHandicap &&
    touchPosition.y >= asteroidBodyBounds.min.y - touchHandicap
  ) {
    return true;
  }
  return false;
};

const asteroidOutsideOfBounds = (asteroidBodyBounds, screenHeight) => {
  if (asteroidBodyBounds.min.y >= screenHeight) {
    return true;
  }
  return false;
};

// NOTE :: VARIABLES
let speedCounter = 0;
let asteroidSpeed = calcAsteroidSpeed(2);
let touchHandicap = 0;
let asteroidVerticalSpeed = 5;

// NOTE :: SYSTEMS

export const DeployAsteroids = (entities, { touches }) => {
  speedCounter++;
  if (speedCounter === asteroidSpeed) {
    let randomHorizontalPos = randomBetween(0, SCREEN_WIDTH - 1);
    let randomVerticalPos = 0;
    // let randomVerticalPos = randomBetween(0, SCREEN_HEIGHT - 1);

    let body = Create_Asteroid_Matter(
      randomHorizontalPos,
      randomVerticalPos,
      Math.trunc(Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 0.125) / 2
    );

    const asteroidGeneratedKey = `Asteroid${Math.random()}`;
    entities.created.createdAsteroids.push(asteroidGeneratedKey);

    entities[asteroidGeneratedKey] = {
      body: body,
      renderer: Asteroid
    };

    speedCounter = 0;
  }
  return entities;
};

export const DestroyAsteroids = (entities, { touches, dispatch }) => {
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
      for (asteroid of entities.created.createdAsteroids) {
        if (touchWithinBounds(entities[asteroid].body.bounds, touchPosition)) {
          delete entities[asteroid];
          entities.created.createdAsteroids.splice(
            entities.created.createdAsteroids.indexOf(asteroid),
            1
          );
          dispatch({ type: 'destroyAsteroid' });
        }
      }
    }
  }
  return entities;
};

export const RemoveAsteroids = (entities, { touches }) => {
  for (asteroid of entities.created.createdAsteroids) {
    if (
      asteroidOutsideOfBounds(entities[asteroid].body.bounds, SCREEN_HEIGHT)
    ) {
      delete entities[asteroid];
      entities.created.createdAsteroids.splice(
        entities.created.createdAsteroids.indexOf(asteroid),
        1
      );
    }
  }
  return entities;
};

export const MoveAsteroids = (entities, { touches }) => {
  for (asteroid of entities.created.createdAsteroids) {
    Matter.Body.translate(entities[asteroid].body, {
      x: 0,
      y: asteroidVerticalSpeed
    });
  }
  return entities;
};

export const RemoveCollidedAsteroids = (
  entities,
  { touches, dispatch, events }
) => {
  // console.log('LENGTH OF IDS: ', entities.destroy.destroyAsteroids.length);
  const destroyAsteroids = [];

  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === 'asteroidCollision') {
        destroyAsteroids.push(events[i].id);
        entities.destroy.destroyAsteroids.push(events[i].id);
      }
    }
  }

  for (asteroid of entities.created.createdAsteroids) {
    for (id of destroyAsteroids) {
      if (entities[asteroid] && entities[asteroid].body.id === id) {
        delete entities[asteroid];
        entities.created.createdAsteroids.splice(
          entities.created.createdAsteroids.indexOf(asteroid),
          1
        );
        dispatch({ type: 'removeAfterCollision', id: id });
      }
    }
  }
  return entities;
};
