import Matter from 'matter-js';
import { Asteroid, Create_Asteroid_Matter } from '../renderers/Asteroid';
import { Truck, Create_Truck_Matter } from '../renderers/Truck';
import { RubberDuck, Create_RubberDuck_Matter } from '../renderers/RubberDuck';
import { GAME_DEFAULTS } from '../init';
import {
  SCREEN_WIDTH,
  randomBetween,
  calcDensity,
  outsideOfVerticalBounds,
  touchWithinBounds,
} from '../../../psychetap/utilities';

// NOTE :: SYSTEMS
let asteroidDensity = GAME_DEFAULTS.asteroidDensity;
let truckDensity = GAME_DEFAULTS.truckDensity;
let rubberDuckDensity = GAME_DEFAULTS.rubberDuckDensity;

let asteroidIterator = 0;
let truckIterator = 0;
let rubberDuckIterator = 0;

export const DeployDangers = (entities, {}) => {
  if (asteroidIterator === asteroidDensity) {
    const randomHorizontalPos = randomBetween(0, SCREEN_WIDTH - 1);
    let body = Create_Asteroid_Matter(randomHorizontalPos, 0);
    const minSpeed = entities.levelsystem.speed.asteroid.min;
    const maxSpeed = entities.levelsystem.speed.asteroid.max;
    const speed = randomBetween(minSpeed, maxSpeed);
    const asteroidGeneratedKey = `Asteroid${Math.random()}`;
    entities.created.createdAsteroids.push(asteroidGeneratedKey);
    entities[asteroidGeneratedKey] = { body, speed, renderer: Asteroid };

    const minDensity = entities.levelsystem.density.asteroid.min;
    const density = calcDensity(minDensity);
    asteroidDensity = density;
    asteroidIterator = 0;
  }

  if (truckIterator === truckDensity) {
    const randomHorizontalPos = randomBetween(0, SCREEN_WIDTH - 1);
    let body = Create_Truck_Matter(randomHorizontalPos, 0);
    const minSpeed = entities.levelsystem.speed.truck.min;
    const maxSpeed = entities.levelsystem.speed.truck.max;
    const speed = randomBetween(minSpeed, maxSpeed);
    const truckGeneratedKey = `Truck${Math.random()}`;
    entities.created.createdTrucks.push(truckGeneratedKey);
    entities[truckGeneratedKey] = { body, speed, renderer: Truck };

    const minDensity = entities.levelsystem.density.truck.min;
    const density = calcDensity(1 / minDensity);
    truckDensity = density;
    truckIterator = 0;
  }

  if (rubberDuckIterator === rubberDuckDensity) {
    const randomHorizontalPos = randomBetween(0, SCREEN_WIDTH - 1);
    let body = Create_RubberDuck_Matter(randomHorizontalPos, 0);
    const minSpeed = entities.levelsystem.speed.rubberDuck.min;
    const maxSpeed = entities.levelsystem.speed.rubberDuck.max;
    const speed = randomBetween(minSpeed, maxSpeed);
    const rubberDuckGeneratedKey = `RubberDuck${Math.random()}`;
    entities.created.createdRubberDucks.push(rubberDuckGeneratedKey);
    entities[rubberDuckGeneratedKey] = { body, speed, renderer: RubberDuck };

    const minDensity = entities.levelsystem.density.rubberDuck.min;
    const density = calcDensity(1 / minDensity);
    rubberDuckDensity = density;
    rubberDuckIterator = 0;
  }

  asteroidIterator++;
  truckIterator++;
  rubberDuckIterator++;

  return entities;
};

export const RemoveDangers = (entities, {}) => {
  for (asteroid of entities.created.createdAsteroids) {
    if (outsideOfVerticalBounds(entities[asteroid].body.bounds)) {
      delete entities[asteroid];
      const index = entities.created.createdAsteroids.indexOf(asteroid);
      entities.created.createdAsteroids.splice(index, 1);
    }
  }
  for (truck of entities.created.createdTrucks) {
    if (outsideOfVerticalBounds(entities[truck].body.bounds)) {
      delete entities[truck];
      const index = entities.created.createdTrucks.indexOf(truck);
      entities.created.createdTrucks.splice(index, 1);
    }
  }
  for (rubberDuck of entities.created.createdRubberDucks) {
    if (outsideOfVerticalBounds(entities[rubberDuck].body.bounds)) {
      delete entities[rubberDuck];
      const index = entities.created.createdRubberDucks.indexOf(rubberDuck);
      entities.created.createdRubberDucks.splice(index, 1);
    }
  }
  return entities;
};

export const DestroyDangers = (entities, { touches, dispatch }) => {
  let touchPositions = [];
  touches
    .filter((t) => t.type === 'press')
    .forEach((t) => {
      const touchPosition = { x: t.event.pageX, y: t.event.pageY };
      touchPositions.push(touchPosition);
    });
  if (touchPositions.length !== 0) {
    for (let i = 0; i < touchPositions.length; i++) {
      const touchPosition = touchPositions[i];
      for (asteroid of entities.created.createdAsteroids) {
        const bounds = entities[asteroid].body.bounds;
        if (touchWithinBounds(bounds, touchPosition)) {
          delete entities[asteroid];
          const index = entities.created.createdAsteroids.indexOf(asteroid);
          entities.created.createdAsteroids.splice(index, 1);
          dispatch({ type: 'setScore', value: 10 });
        }
      }
      for (truck of entities.created.createdTrucks) {
        const bounds = entities[truck].body.bounds;
        if (touchWithinBounds(bounds, touchPosition)) {
          delete entities[truck];
          const index = entities.created.createdTrucks.indexOf(truck);
          entities.created.createdTrucks.splice(index, 1);
          dispatch({ type: 'setScore', value: 30 });
        }
      }
      for (rubberDuck of entities.created.createdRubberDucks) {
        const bounds = entities[rubberDuck].body.bounds;
        if (touchWithinBounds(bounds, touchPosition)) {
          delete entities[rubberDuck];
          const index = entities.created.createdRubberDucks.indexOf(rubberDuck);
          entities.created.createdRubberDucks.splice(index, 1);
          dispatch({ type: 'setScore', value: 20 });
        }
      }
    }
  }
  return entities;
};

let asteroidSpeedModifier = 1;
let truckSpeedModifier = 1;
let rubberDuckSpeedModifier = 1;
let clockEffectActive = false;
let clockEffectIterator = 0;

export const MoveDangers = (entities, { events }) => {
  // TODO :: MOVE CLOCK EFFECT TO POWERUP/BASE SYSTEMS
  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === 'effectClock') {
        // TODO: Handle multiple clock events (iterator + 180?)
        asteroidSpeedModifier = 0.5;
        truckSpeedModifier = 0.5;
        rubberDuckSpeedModifier = 0.5;
        clockEffectActive = true;
      }
    }
  }

  if (clockEffectActive) {
    if (clockEffectIterator === 180) {
      clockEffectActive = false;
      clockEffectIterator = 0;
      asteroidSpeedModifier = 1;
      truckSpeedModifier = 1;
      rubberDuckSpeedModifier = 1;
    } else {
      clockEffectIterator++;
    }
  }

  for (asteroid of entities.created.createdAsteroids) {
    const body = entities[asteroid].body;
    const initialSpeed = entities[asteroid].speed;
    const speed = initialSpeed * asteroidSpeedModifier;
    Matter.Body.translate(body, { x: 0, y: speed });
  }

  for (truck of entities.created.createdTrucks) {
    const body = entities[truck].body;
    const initialSpeed = entities[truck].speed;
    const speed = initialSpeed * truckSpeedModifier;
    Matter.Body.translate(body, { x: 0, y: speed });
  }

  for (rubberDuck of entities.created.createdRubberDucks) {
    const body = entities[rubberDuck].body;
    const initialSpeed = entities[rubberDuck].speed;
    const speed = initialSpeed * rubberDuckSpeedModifier;
    Matter.Body.translate(body, { x: 0, y: speed });
  }
  return entities;
};

export const RemoveCollidedDangers = (entities, { dispatch, events }) => {
  // TODO :: REFACTOR
  let destroyDangers = [];

  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === 'dangerCollision') {
        destroyDangers.push(events[i].id);
        entities.destroy.destroyDangers.push(events[i].id);
      }
    }
  }

  for (id of destroyDangers) {
    for (asteroid of entities.created.createdAsteroids) {
      if (entities[asteroid] && entities[asteroid].body.id === id) {
        delete entities[asteroid];
        const index = entities.created.createdAsteroids.indexOf(asteroid);
        entities.created.createdAsteroids.splice(index, 1);
        dispatch({
          type: 'setHealth',
          value: -10,
        });
      }
    }

    for (truck of entities.created.createdTrucks) {
      if (entities[truck] && entities[truck].body.id === id) {
        delete entities[truck];
        const index = entities.created.createdTrucks.indexOf(truck);
        entities.created.createdTrucks.splice(index, 1);
        dispatch({
          type: 'setHealth',
          value: -30,
        });
      }
    }

    for (rubberDuck of entities.created.createdRubberDucks) {
      if (entities[rubberDuck] && entities[rubberDuck].body.id === id) {
        delete entities[rubberDuck];
        const index = entities.created.createdRubberDucks.indexOf(rubberDuck);
        entities.created.createdRubberDucks.splice(index, 1);
        dispatch({
          type: 'setHealth',
          value: -20,
        });
      }
    }
  }
  return entities;
};
